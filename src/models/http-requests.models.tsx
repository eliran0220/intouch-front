import {HTTP_METHODS,METHOD} from '../utilitis/constants.utilities';
export interface HttpApiRequest {
    method : METHOD,
    url : string,
    data :  Body | undefined,
    headers : GenericRequestExtras | undefined,
    query : string | undefined,
}

export type Body =  GenericRequestExtras | null;

interface GenericRequestExtras {
    [key : string] : any;
}
