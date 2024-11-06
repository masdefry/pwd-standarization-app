import {useMutation} from '@tanstack/react-query'
import instance from '@/utils/axiosInstance'
import { AxiosResponse, AxiosError } from 'axios'
import { IUseMutation } from './types'

export const useUpdateProfileMutation = ({onSuccess, onError}: IUseMutation) => {
    const {mutate: updateProfileMutation} = useMutation<AxiosResponse, AxiosError, FormData>({
        mutationFn: async(fd) => {
            return await instance.put('/users', fd)
        }, 

        onSuccess, 
        onError
    })

    return {
        updateProfileMutation
    }
}