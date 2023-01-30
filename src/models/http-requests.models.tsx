import { AxiosRequestConfig } from 'axios';
import {METHOD} from '../utilitis/constants.utilities';
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

export interface AxiosResponse<T = never>  {
    data: any;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: AxiosRequestConfig<T>;
    request?: any;
    response? :any;
}
