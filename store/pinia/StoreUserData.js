import { defineStore } from 'pinia'
import { add_client_database } from "~/store/modules/CreateClient.js";
import { supabase } from "~/store/database/supabase.js";

export const useStore = defineStore('user', {
    state: () => ({
        user: {
            status: null,
            session: null,
            email: null,
            nickname: "",
            token: false,
            isAdmin: false
        }
    }),

    getters: {
        get_user_data: async (state) => {
            try {
                let { data, error, status} = await supabase.auth.getUser()

                let session = await supabase.auth.getSession()

                if (data) {
                    state.user.email = data.user.user_metadata.email
                    state.user.nickname = data.user.user_metadata.nickname
                    state.user.status = data.user.aud
                }

                console.log(session)
            }
            catch (error) {
                return error.message
            }
        },

        session_state: async (state) => {
            try {
                let session = await supabase.auth.getSession()
                if (session) state.user.session = true
            }
            catch (error) {
                return error.message
            }
        }
    },

    actions: {
        create_client: async (user_data) => {
            await add_client_database(user_data)
        },

        logout_account: async (state) => {
            try {
                const { error } = await supabase.auth.signOut()
                if (error) throw error
            } catch (error) {
                return error.message
            }
        }
    },

    mutations: {

    }
})