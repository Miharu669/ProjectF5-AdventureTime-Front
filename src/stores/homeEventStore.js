import axios from "axios";
import { defineStore } from "pinia";


const BASE_URL = import.meta.env.VITE_API_ENDPOINT;

export const useHomeEventStore = defineStore('homeEvent', {
    state: () => ({
        event: [],
        isLoading: false,
        error: null,
    }),

    actions: {
        async fetchEvents() {
            this.isLoading = true;
            this.error = null;
            try {
                const response = await axios.get(`${BASE_URL}/event/all`);
                this.events = response.data;
            } catch (error) {
                this.error = 'Error fetching events: ' + error.message;
                console.error(this.error);
            } finally {
                this.isLoading = false;
            }
        }
    }
})