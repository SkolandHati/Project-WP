import { defineStore } from 'pinia'
import { add_client_database } from "~/store/modules/CreateClient.js";
import { supabase } from "~/store/database/supabase.js";

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
        get_user_data: async (state) => {
            try {
                let user_info = await supabase.auth.getUser()
                console.log(user_info)
            }
            catch (error) {
                return error.message
            }
        }
    },

    actions: {
        create_client: async (user_data) => {
            await add_client_database(user_data)
        }
    },

    mutations: {

    }
})