export interface ProfileState {
    email: string,
    first_name: string,
    last_name: string,
    avatar?: string
};

interface LoginAction{
    type: ActionType.LOGIN,
    payload: string
}

interface LogoutAction {
    type: ActionType.LOGOUT,
    payload: string
}

interface SignupAction {
    type: ActionType.SIGNUP,
    payload: string
}

export type Action = LoginAction | LogoutAction | SignupAction;

export enum ActionType {
    LOGIN = "LOGIN",
    LOGOUT = "LOGOUT",
    SIGNUP = "SIGNUP"
}

