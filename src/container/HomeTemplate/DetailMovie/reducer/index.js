import * as ActionType from './constant'

const initialState = {
    loading: false,
    data: null,
    error: null
}

const detailMovieReducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionType.DETAIL_MOVIE_REQUEST: {
            state.loading = true;
            state.data = null;
            state.error = null;
            return { ...state }
        }

        case ActionType.DETAIL_MOVIE_SUCCESS: {
            console.log(action.payload);
            state.loading = false;
            state.data = action.payload;
            state.error = null;
            return { ...state };
        }

        case ActionType.DETAIL_MOVIE_FAILED: {
            state.loading = false;
            state.data = null;
            state.error = action.payload;
            return { ...state };
        }

        default:
            return { ...state }
    }
}

export default detailMovieReducer