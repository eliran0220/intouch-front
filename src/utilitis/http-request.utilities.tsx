import axios from 'axios';
import {HttpApiRequest} from '../models/http-requests.models';
axios.defaults.withCredentials = true;
const apiRequest = async (request : HttpApiRequest) =>{
    try{
        const options = {
            method : request.method,
            url : request.url,
            data : request.data? request.data : null,
            headers : request.headers? request.headers : {},
            query : request.query?  request.query : undefined,
        };
        const response = await axios(options);
        return response;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}


export default apiRequest;