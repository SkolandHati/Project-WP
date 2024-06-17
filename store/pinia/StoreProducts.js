import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        products: [
            {
                item_name: "efwfefew",
                piece: 4,
                price_product: 250
            },
            {
                item_name: "effewfewe34324",
                piece: 1,
                price_product: 241
            },
            {
                item_name: "QWEEWw",
                piece: 5,
                price_product: 765
            },
            {
                item_name: "QR34tgefg",
                piece: 2,
                price_product: 12900
            },
            {
                item_name: "QWEEWw",
                piece: 5,
                price_product: 765
            },
            {
                item_name: "QR34tgefg",
                piece: 2,
                price_product: 12900
            }
        ]
    }),

    getters: {

    },

    actions: {

    },

    mutations: {

    }
})