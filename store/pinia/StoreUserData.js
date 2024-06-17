import { defineStore } from 'pinia'

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

    },

    mutations: {

    }
})