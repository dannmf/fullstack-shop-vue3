import { defineStore } from "pinia";
import { api } from "../services/api";

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: localStorage.getItem('token'),
        user: null as null | { name: '', email: '' },
    }),

    actions: {
        async login(email: string, password: string) {
            const { data } = await api.post('/login', { email, password })
            this.token = data.token
            this.user = data.user
            localStorage.setItem('token', data.token)
        },

        async logout() {
            await api.post('/logout')
            this.token = null
            this.user = null
            localStorage.removeItem('token')
        },
    }
})

