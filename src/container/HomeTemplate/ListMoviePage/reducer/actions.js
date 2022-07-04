import { LIST_MOVIE_REQUEST, LIST_MOVIE_SUCCESS, LIST_MOVIE_ERROR } from "./constant"
import axios from 'axios'


const actListMovieRequest = () => {
    return {
        type: LIST_MOVIE_REQUEST
    }
}

const actListMovieSuccess = (data) => {
    return {
        type: LIST_MOVIE_SUCCESS,
        payload: data
    }
}

const actListMovieError = (error) => {
    return {
        type: LIST_MOVIE_ERROR,
        payload: error
    }
}

export const actFetchData = () => {
    return (dispatch) => {
        dispatch(actListMovieRequest())

        axios({
            url: "https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01",
            method: "GET",
            headers: {
                "TokenCybersoft": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNSIsIkhldEhhblN0cmluZyI6IjE2LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MTE0ODgwMDAwMCIsIm5iZiI6MTY0MTU3NDgwMCwiZXhwIjoxNjcxMjk2NDAwfQ.cB7cdIfS0TKI1Yx_WRS-tEOt5K5yf3QJCot63SYEOHo"
            }
        })
            .then(result => {
                dispatch(actListMovieSuccess(result.data.content))
            })
            .catch(error => {
                dispatch(actListMovieError(error))
            })
    }
}


