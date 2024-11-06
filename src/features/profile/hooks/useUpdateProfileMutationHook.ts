import { useUpdateProfileMutation } from '../api/useUpdateProfileMutation'
import {toast} from 'react-toastify';

export const useUpdateProfileMutationHook = () => {
    const {updateProfileMutation} = useUpdateProfileMutation({
        onSuccess: () => {
            toast.success('Update Profile Success')
        },
        onError: () => {
            toast.error('Failed')
        }
    })

    return{
        updateProfileMutation
    }
}