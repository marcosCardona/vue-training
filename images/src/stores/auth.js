import { defineStore } from 'pinia';
import qs from 'qs';
import api from '../api/imgur';
import router from '../router';
const IMGUR_KEY = 'imgur_token';

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: window.localStorage.getItem(IMGUR_KEY)
    }),
    getters: {
        isLoggedIn: (state) => !!state.token
    },
    actions: {
        setToken(token) {
            this.token = token;
        },
        login() {
            api.login();
        },
        finalizeLogin(hash) {
            const query = qs.parse(hash.replace('#',''));
            
            this.setToken(query.access_token);
            window.localStorage.setItem(IMGUR_KEY, query.access_token);

            router.push('/');
        },
        logout() {
            this.setToken(null);
            window.localStorage.removeItem(IMGUR_KEY);
        }
    }
});