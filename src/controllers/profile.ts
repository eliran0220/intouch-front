import { PostData } from '../models/general-models';
import { HttpApiRequest, Body} from '../models/http-requests.models';
import { HTTP_METHODS } from "../utilitis/constants.utilities";
import apiRequest from "../utilitis/http-request.utilities";

export const apiShareRequest = async (post_input: string) => {
    try {
        const body : Body = {post_input: post_input}
        const user = JSON.parse(localStorage.getItem('user_id') as string);
        const full_name = JSON.parse(localStorage.getItem('full_name') as string);
        console.log(user)
        const request : HttpApiRequest = {
            method: HTTP_METHODS.POST,
            url: `http://localhost:3030/v1/post/${user}`,
            data: body,
            headers: undefined,
            query: undefined
        }
        const response = await apiRequest(request);
        const new_post : PostData = {
            _id: response.data._id,
            user_id: user,
            full_name: full_name,
            post_input: response.data.post_input,
            created_at_standart:  response.data.created_at_standart,
            created_at_timestamp: response.data.created_at_timestamp
        }
        console.log(new_post)
        return new_post;
    } catch (err){
        throw err;
    }
}

export const getAllPostsRelated = async () => {
    try {
        const user_id = JSON.parse(localStorage.getItem('user_id') as string);
        const request : HttpApiRequest = {
            method: HTTP_METHODS.GET,
            url: `http://localhost:3030/v1/posts/${user_id}`,
            data: null,
            headers: undefined,
            query: undefined
        }
        const response = await apiRequest(request);
        return response.data.data;
    } catch (err){
        throw err;
    }
}

export const getSearchedUsers = async (full_name: string) => {
    try {
        const request : HttpApiRequest = {
            method: HTTP_METHODS.GET,
            url: `http://localhost:3030/v1/user/getUsers/${full_name}`,
            data: null,
            headers: undefined,
            query: undefined
        }
        const response = await apiRequest(request);
        return response.data.data;
    } catch (err) {
        throw err;
    }
}