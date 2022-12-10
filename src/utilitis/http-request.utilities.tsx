import axios from 'axios';
import {HttpApiRequest} from '../models/http-requests.models';
import {HTTP_METHODS} from '../utilitis/constants.utilities';

const apiRequest = async (request : HttpApiRequest) =>{
    try{
        const options = {
            method : request.method,
            url : request.url,
            data : request.data? request.data : null,
            headers : request.headers? request.headers : {},
            query : request.query?  request.query : undefined,
        };
        console.log(options);
        const response = await axios(options);
        console.log(response.headers);
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}

export default apiRequest;