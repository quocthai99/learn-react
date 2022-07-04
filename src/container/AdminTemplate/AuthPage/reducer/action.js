import * as ActionType from "./constant"
import axios from "axios"

export const actLogin = (user) => {
    return (dispatch) => {
        dispatch(actAuthRequest())

        axios({
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            method: "POST",
            data: user,
            headers: {
                TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNSIsIkhldEhhblN0cmluZyI6IjE2LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MTE0ODgwMDAwMCIsIm5iZiI6MTY0MTU3NDgwMCwiZXhwIjoxNjcxMjk2NDAwfQ.cB7cdIfS0TKI1Yx_WRS-tEOt5K5yf3QJCot63SYEOHo"
            }
        })
        .then(result => {
            dispatch(actAuthSuccess(result.data.content))
        })
        .catch(error => {
            dispatch(actAuthError(error))
        })
    }

}


const actAuthRequest = () => {
    return {
        type: ActionType.AUTH_REQUEST
    }
}

const actAuthSuccess = (data) => {
    return {
        type: ActionType.AUTH_SUCCESS,
        payload: data
    }
}

const actAuthError = (error) => {
    return {
        type: ActionType.AUTH_ERROR,
        payload: error
    }
}