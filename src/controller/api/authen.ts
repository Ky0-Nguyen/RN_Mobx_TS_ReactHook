import baseApi from './baseApi'

export const login = (grantType: any, username: any, password: any) => {
    const data = {
        grant_type: grantType,
        username,
        password,
    }

    return baseApi.post(
        '/oauth/token',
        data,
        true,
    )
}

export const refreshToken = (grantType: any, refToken: any) => {
    const data = {
        grant_type: grantType,
        refresh_token: refToken,
    }

    return baseApi.post(
        '/oauth/token',
        data,
        true,
    )
}
export const getVersion = () => {
    return baseApi.get(
        '/public/version/driver',
        {},
        false,
    )
}

export const onChangePassword = (userName: any, oldPassword: any, newPassword: any) => {
    const data = {
        username: userName,
        oldPass: oldPassword,
        newPass: newPassword,
    }
    return baseApi.put(
        '/user/changepassword',
        data,
        true,
    )
}
