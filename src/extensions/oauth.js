const ClientOAuth2 = require("client-oauth2")
const axios = require("axios")

export const OAuthToken = ClientOAuth2.Token
export default new ClientOAuth2({
    clientId: "web",
    accessTokenUri: "/auth/oauth2/token",
    authorizationUri: "/auth/oauth2/token?grant_type=refresh_token",
    scopes: "server"
})

export const getToken = params => {
    const { userName: username, password, code } = params
    const grantType = "password"
    const scope = "server"

    const randomStr = Math.random()
        .toString(36)
        .substr(2)

    return axios({
        method: "POST",
        url: "/api/auth/oauth/token",
        headers: {
            Authorization: "Basic dGFyb2NvOnRhcm9jbw=="
        },
        params: {
            username,
            password,
            randomStr,
            code,
            grant_type: grantType,
            scope
        }
    })
}

export const refreshToken = () => {
    let token = localStorage.getItem("token")
    if (!token) {
        return new Promise(resolve => {
            resolve(null)
        })
    }

    token = JSON.parse(token)

    const grantType = "refresh_token"

    return axios({
        method: "POST",
        url: "/api/auth/oauth/token",
        headers: {
            Authorization: "Basic dGFyb2NvOnRhcm9jbw=="
        },
        params: { grant_type: grantType, refresh_token: token.refresh_token }
    })
}
