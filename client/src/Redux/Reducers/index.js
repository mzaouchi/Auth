import {combineReducers} from 'redux'
import AuthReducer from './AuthReducer'
import ErrorsReeducer from './ErrorsReeducer'
const rootReducer = combineReducers({AuthReducer,ErrorsReeducer})

export default rootReducer