import { LIST_MOVIE_REQUEST, LIST_MOVIE_SUCCESS, LIST_MOVIE_ERROR } from "./constant"



const initialState = {
    loading: true,
    data: null,
    error: null
}

const listMovieReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_MOVIE_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null
            return { ...state }
        }

        case LIST_MOVIE_SUCCESS: {
            state.loading = false
            state.data = action.payload
            state.error = null
            return { ...state }
        }

        case LIST_MOVIE_ERROR: {
            state.loading = false
            state.data = null
            state.error = action.payload
            return { ...state }
        }

        default:
            return { ...state }
    }
}

export default listMovieReducer