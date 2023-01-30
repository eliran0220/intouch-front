import { HttpApiRequest } from "../models/http-requests.models";
import apiRequest from "./http-request.utilities";

export const isAuthenticated = async () => {
    try {
        const request: HttpApiRequest = {
            method: "get",
            url: 'http://localhost:3030/v1/user/authenticate',
            data: null,
            headers: {},
            query: undefined,
        };
        const response = await apiRequest(request);
        if (response.data.status === 200) {
            return true;
        }
        return;
    } catch (err) {
        console.log(err);
        throw err;
    }
  };