import * as ActionType from "./constant"
import { api } from "../../../../util/apiUtil"


export const actAddUser = (user) => {
    return (dispatch) => {

        dispatch(actAddUserRequest())

        api.post("QuanLyNguoiDung/ThemNguoiDung", user)
        .then(result => {
            dispatch(actAddUserSuccess(result.data))
        })
        .catch(error => {
            dispatch(actAddUserError(error))
        })
    }
}


const actAddUserRequest = () => {
    return {
        type: ActionType.ADD_USER_REQUEST
    }
}

const actAddUserSuccess = (data) => {
    return {
        type: ActionType.ADD_USER_SUCCESS,
        payload: data
    }
}

const actAddUserError = (error) => {
    return {
        type: ActionType.ADD_USER_ERROR,
        payload: error
    }
}