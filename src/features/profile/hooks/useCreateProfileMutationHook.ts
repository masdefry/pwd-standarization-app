import { useCreateProfileMutation } from '../api/useCreateProfileMutation'
import {toast} from 'react-toastify';

export const useCreateProfileMutationHook = () => {
    const {createProfileMutation} = useCreateProfileMutation({
        onSuccess: () => {
            toast.success('Create Profile Success')
        }, 

        onError: () => {
            toast.error('Failed')
        }
    })

    return{
        createProfileMutation
    }
}