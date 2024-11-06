import { UseMutateFunction } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

export interface IDisplayProfileProps{
    birthDate: string, 
    phoneNumber: string, 
    address: string,
    imagesProfile: any[]
}

export interface IFormProfile extends Partial<Pick<IDisplayProfileProps, 'birthDate' | 'phoneNumber' | 'address'>>{
    createProfileMutation?: UseMutateFunction<AxiosResponse, any, FormData, unknown>;
    updateProfileMutation?: UseMutateFunction<AxiosResponse, any, FormData, unknown>;
    isEdit?: boolean
}