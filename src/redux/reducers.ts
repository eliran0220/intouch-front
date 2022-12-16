import {initialState} from './utilitis';
import {ProfileState,Action,ActionType} from '../models/redux-models';
export const userReducer = (state: ProfileState = initialState, action: Action): ProfileState => {
    switch(action.type) {
        case ActionType.LOGIN:

            return {
                ...state,
                email : action.payload,
            }
        case ActionType.LOGOUT:
            return {
                ...state,
                email : action.payload,
            }
        case ActionType.SIGNUP:
            return {
                ...state,
                email : action.payload
            }   
        default:
            return state;    
    }
    return state;
};