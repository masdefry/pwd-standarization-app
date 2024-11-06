import {useMutation} from '@tanstack/react-query'
import { IUseMutation } from './types'
import { AxiosResponse, AxiosError } from 'axios'
import instance from '@/utils/axiosInstance'

export const useCreateProfileMutation = ({onSuccess, onError}: IUseMutation) => {
    const {mutate: createProfileMutation} = useMutation<AxiosResponse, AxiosError, FormData>({
        mutationFn: async(fd: FormData) => {
            return await instance.post('/users', fd)
        },
        onSuccess, 
        onError 
    })

    return{
        createProfileMutation
    }
}