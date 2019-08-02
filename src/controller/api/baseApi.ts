import axios from 'axios'
import qs from 'qs'
import { Alert } from 'react-native'

import authenStore from 'mbx/stores/authenStore'

export const baseURL = ''
const METHOD_GET = 'get'
const METHOD_POST = 'post'
const METHOD_PUT = 'put'
const METHOD_DELETE = 'delete'

let CURRENT_USER: { access_token: any; refresh_token: any; } | null = null
export function setCurrentUser(CU: {
    access_token: string;
    refresh_token: string;
} | null) {
    CURRENT_USER = CU
}

export function getCurrentUser() {
    return CURRENT_USER
}

export interface PropsParams {
    action: string
    headers: any
    method: string
    body: any
    timeout?: number
}
async function requestAPI(props: PropsParams) {
    const {
        action,
        method,
        body,
        headers,
        timeout = 10000,
    } = props

    const token = CURRENT_USER !== null ? CURRENT_USER.access_token : null
    if (token && token !== '') {
        headers.Authorization = `Bearer ${token}`
    }

    let config: {
        method: string,
        url: string,
        headers: object,
        timeout: number,
        data?: any,
    } = {
        method,
        headers,
        timeout,
        url: action,
    }

    if (method === METHOD_POST || method === METHOD_PUT) {
        config = {
            ...config,
            data: qs.stringify(body),
        }
    }

    return axios(`${config}`)
        .then(async (res: {
            data:
            {
                error: {
                    code: number;
                    message: string | undefined;
                };
            };
        }) => {
            if (res.data.error) {
                if (CURRENT_USER && res.data.error.code === 401) {
                    return authenStore.refreshToken({
                        grantType: 'refresh_token',
                        refreshToken: CURRENT_USER.refresh_token,
                    })
                        .then(() => {
                            requestAPI({ action, method, body, headers })
                        })
                        .catch((err: any) => {
                            console.log(err)
                            Alert.alert('Lỗi', 'Token đã hết hạn vui lòng đăng nhập lại')
                        })
                }
                if (CURRENT_USER && res.data.error.code === 404) {
                    Alert.alert('Lỗi', 'There could be a problem with the server')
                }

                return Promise.reject(new Error(res.data.error.message))
            }
            return res
        })
}

export default {
    get(action: any, dataBody: any, headers = {}) {
        return requestAPI({ action, method: METHOD_GET, body: dataBody, headers })
    },

    post(action: any, dataBody: any, headers = {}) {
        return requestAPI({ action, method: METHOD_POST, body: dataBody, headers })
    },

    put(action: any, dataBody: any, headers = {}) {
        return requestAPI({ action, method: METHOD_PUT, body: dataBody, headers })
    },

    delete(action: any, dataBody: any, headers = {}) {
        return requestAPI({ action, method: METHOD_DELETE, body: dataBody, headers })
    },
}
