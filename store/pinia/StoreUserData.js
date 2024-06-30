import { defineStore } from 'pinia'
import { add_client_database } from "~/store/modules/CreateClient.js";

export const useStore = defineStore('user', {
    state: () => ({
        user: {
            token: false,
            firstName: "",
            lastName: "",
            nickname: "",
            isAdmin: false
        }
    }),

    getters: {

    },

    actions: {
        create_client: async (user_data) => {
            await add_client_database(user_data)
        }
    },

    mutations: {

    }
})