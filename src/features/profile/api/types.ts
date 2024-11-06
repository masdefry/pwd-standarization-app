import { AxiosResponse, AxiosError } from 'axios';

export interface IUseMutation{
    onSuccess: (res: AxiosResponse) => void, 
    onError: (err: AxiosError) => void
}