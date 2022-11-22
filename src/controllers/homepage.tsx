import { HttpApiRequest, Body} from '../models/http-requests.models';
import apiRequest from '../utilitis/http-request.utilities';
import {HTTP_METHODS,METHOD} from '../utilitis/constants.utilities';
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
        console.log(response);
    } catch (error) {
        throw error;
    }
}