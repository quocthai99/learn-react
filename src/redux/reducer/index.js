import { combineReducers } from 'redux'
import listMovieReducer from '../../container/HomeTemplate/ListMoviePage/reducer'
import detailMovieReducer from '../../container/HomeTemplate/DetailMovie/reducer'
import authReducer from '../../container/AdminTemplate/AuthPage/reducer'
import addUserReducer from '../../container/AdminTemplate/AddUserPage/reducer'

const rootReducer = combineReducers({
    // child Reducer
    listMovieReducer,
    detailMovieReducer,
    authReducer,
    addUserReducer,
})

export default rootReducer