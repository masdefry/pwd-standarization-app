import { useGetProfileQuery } from '../api/useGetProfileQuery'

export const useGetProfileQueryHook = () => {
    const {dataUserProfile} = useGetProfileQuery()

    return{
        dataUserProfile
    }
}