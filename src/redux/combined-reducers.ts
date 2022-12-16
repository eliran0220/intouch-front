import {combineReducers} from 'redux'
import {userReducer} from './reducers';

const reducers = combineReducers({
    user: userReducer
});

export default reducers;