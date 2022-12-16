import {ActionType,Action} from '../models//redux-models';
import {Dispatch} from 'redux'
export const login = (email: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGIN,
            payload:email
        })
    }
}

export const logout = (email: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.LOGOUT,
            payload: email
        })
    }
}

export const signup = (email: string) => {
    return (dispatch: Dispatch<Action>) => {
        dispatch({
            type: ActionType.SIGNUP,
            payload: email
        })
    }
}
