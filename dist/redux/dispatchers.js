import { ActionType } from '../models//redux-models';
export var login = function (email) {
    return function (dispatch) {
        dispatch({
            type: ActionType.LOGIN,
            payload: email
        });
    };
};
export var logout = function (email) {
    return function (dispatch) {
        dispatch({
            type: ActionType.LOGOUT,
            payload: email
        });
    };
};
export var signup = function (email) {
    return function (dispatch) {
        dispatch({
            type: ActionType.SIGNUP,
            payload: email
        });
    };
};
