import { HttpApiRequest, Body} from '../models/http-requests.models';
import apiRequest from '../utilitis/http-request.utilities';
import {HTTP_METHODS} from '../utilitis/constants.utilities';

export const apiLoginRequest = async (email : string, password: string) =>{
    try {
        const body : Body = {email: email, password: password}
        const request : HttpApiRequest = {
            method: HTTP_METHODS.POST,
            url: 'http://localhost:3030/v1/user/login',
            data: body,
            headers: undefined,
            query: undefined
        }
        const response = await apiRequest(request);
        return response;
    } catch (error) {
        throw error;
    }
}

export const apiSignupRequest = async (email: string, first_name: string, last_name: string, password: string) => {
    try {
        const body : Body = {email: email,first_name:first_name,last_name:last_name, password: password}
        const request : HttpApiRequest = {
            method: HTTP_METHODS.POST,
            url: 'http://localhost:3030/v1/user/signup',
            data: body,
            headers: undefined,
            query: undefined
        }
        const response = await apiRequest(request);
        return response;
    } catch (err){
        throw err;
    }
}

export const apiLogoutRequest = async () => {
    try {
        const request : HttpApiRequest = {
            method: HTTP_METHODS.GET,
            url: 'http://localhost:3030/v1/user/logout',
            data: null,
            headers: undefined,
            query: undefined
        }
        const response = await apiRequest(request);
        localStorage.clear();
        return response;
    } catch (err){
        throw err;
    }
}