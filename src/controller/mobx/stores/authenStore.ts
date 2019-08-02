import { baseURL, setCurrentUser } from 'api/baseApi'
import API from 'api/index'
import Axios from 'axios'
import get from 'lodash/get'
import navStore from 'mbx/stores/navStore'
import { action, observable } from 'mobx'
import { STORE_KEY } from 'utils/globalConstants'
import { getStoreData, setStoreData } from 'utils/globalFunctions'

class AuthenStore {
    @observable.ref public username: string = ''
    @observable.ref public password: string = ''
    @observable.ref public grantType: string = ''

    @observable.ref public token: {
        access_token: string;
        refresh_token: string;
    } = {
            access_token: '',
            refresh_token: '',
        }

    @action public async checkAuthen() {
        const tokenInStore = await getStoreData(STORE_KEY.TOKEN)
        const accessToken = get(tokenInStore, 'access_token')
        if (accessToken) {
            navStore.resetToHome()
        } else {
            navStore.resetToLogin()
        }
    }

    @action public async login({ grantType, username, password }: {
        grantType: any;
        username: any;
        password: any;
    }) {
        API.login(grantType, username, password)
            .then(async (response: any) => {
                if (response.data.error) {
                    return Promise.reject(new Error(response.data.error.message))
                }
                await this.saveUser(response.data)
                return response.data
            })
    }

    @action public refreshToken({
        grantType,
        refreshToken,
    }: {
        grantType: string;
        refreshToken: string;
    }) {
        const data = {
            grant_type: grantType,
            refresh_token: refreshToken,
        }
        return Axios({
            baseURL,
            url: '/oauth/token',
            method: 'post',
            validateStatus: () => true,
            data,
        })
            .then(async (res: any) => {
                if (res.data.error) {
                    return Promise.reject(new Error('Can not refresh user token'))
                }

                await this.saveUser(res.data)
                return res.data
            })
    }

    public async saveUser(tokenData: {
        access_token: string;
        refresh_token: string;
    }) {
        if (tokenData) {
            setCurrentUser(tokenData)
            const jsonString = JSON.stringify(tokenData)
            await setStoreData(STORE_KEY.TOKEN, jsonString)

            const currentTime = JSON.stringify(new Date().getTime() / 1000)
            await setStoreData(STORE_KEY.CURRENT_TIME, currentTime)
        }
    }
}

const authenStore = new AuthenStore()
export default authenStore
