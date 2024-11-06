import {create} from 'zustand';
import { persist } from 'zustand/middleware';

const authStore = create(persist((set) => ({
    // Global State
        token: '',
        username: '',
        role: '',

        setAuth: ({token, username, role}: any) => set({token: token, username: username, role: role}),
        setKeepAuth: ({username, role}: any) => set({username, role}),
        setAuthLogout: () => set({username: '', role: '', token: ''})
    }),
    // Persist LocalStorage
    {
        name: 'authToken',
        partialize: (state: any) => ({token: state.token})
    }
))

export default authStore;