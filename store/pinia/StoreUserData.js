import { defineStore } from 'pinia'

export const useStore = defineStore('user', {
    state: () => ({
        user: {
            token: false,
            firstName: "Arma",
            lastName: "Fingers",
            nickname: "Mozanbic",
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