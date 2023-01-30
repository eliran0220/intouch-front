import { PostData, User } from "../models/general-models";
import { createContext, useContext } from "react"

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

export const initialUserState : User = {
    first_name : '',
    last_name: '',
    created_at: '',
    email: '',
    password: '',
    full_name: ''
}

type PostsDataState = {
  posts: PostData[],
  setPosts: (posts : PostData[]) => void
}
export const PostsDataContext = createContext<PostsDataState>({
    posts: [],
    setPosts: () => [] // set a default value
})

export const usePostsDataContext = () => useContext(PostsDataContext)