import * as ActionType from "./constant"
import axios from "axios"
import { api } from "../../../../util/apiUtil"

export const actLogin = (user, navigate) => {
    return (dispatch) => {
        dispatch(actAuthRequest())

        // axios({
        //     url: "https://movienew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
        //     method: "POST",
        //     data: user,
        //     headers: {
        //         TokenCybersoft: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNSIsIkhldEhhblN0cmluZyI6IjE2LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MTE0ODgwMDAwMCIsIm5iZiI6MTY0MTU3NDgwMCwiZXhwIjoxNjcxMjk2NDAwfQ.cB7cdIfS0TKI1Yx_WRS-tEOt5K5yf3QJCot63SYEOHo"
        //     }
        // })
        api.post("QuanLyNguoiDung/DangNhap", user)
            .then(result => {
                if(result.data.content.maLoaiNguoiDung === "KhachHang") {
                    // Error
                    return Promise.reject({
                        response: {
                            data: {
                                content: "Tài khoản không được truy cập"
                            }
                        }
                    })
                }


                dispatch(actAuthSuccess(result.data.content))

                // Save LocalStorage
                localStorage.setItem("UserAdmin", JSON.stringify(result.data.content))

                // Redirect to /admin
                navigate("/admin", { replace: true })
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