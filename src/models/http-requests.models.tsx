import {HTTP_METHODS,METHOD} from '../utilitis/constants.utilities';
export interface HttpApiRequest {
    method : METHOD,
    url : string,
    data :  Body | undefined,
    headers : GenericInterface | undefined,
    query : string | undefined,
}

export type Body =  GenericInterface | null;

export interface GenericInterface {
    [key : string] : any;
}
