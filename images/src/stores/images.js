import { defineStore } from 'pinia';
import { useAuthStore } from "../stores/auth";
import api from '../api/imgur';
import router from '../router';

export const useImagesStore = defineStore('images', {
    state: () => ({
        images: []
    }),
    getters: {
        allImages: (state) => state.images
    },
    actions: {
        setImages(images) {
            this.images = images;
        },
        async fetchImages() {
            const auth = useAuthStore();
            const response = await api.fetchImages(auth.token);
            
            this.setImages(response.data.data);
        },
        async uploadImages(images) {
            const auth = useAuthStore();

            await api.uploadImages(images, auth.token);
            
            router.push('/');         
        }
    }
});