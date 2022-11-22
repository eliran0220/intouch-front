export class CONSTANTS {
    static BASE_URL = "localhost://3031/v1";
    static ENV = "development";
}

export enum ROUTES {
    LOGIN = "user/login",
    SIGNUP = "user/signup",
    IS_LOGGED_IN = "user/authorize"
}

export enum HTTP_METHODS {
    POST = "post",
    GET = "get",
    DELETE = "delete",
    UPDATE = "update"
}

export type METHOD = "post" | "get" | "put" | "delete";
export const BASE_URL = 'http://localhost:3030/v1/';
