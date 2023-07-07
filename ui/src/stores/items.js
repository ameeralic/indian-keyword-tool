import { defineStore } from 'pinia'

export const useItemsStore = defineStore('items', {
    state: () => ({
        /** @type {{ text: string, id: number, isFinished: boolean }[]} */
        items: [],
        /** @type {'all' | 'finished' | 'unfinished'} */
        // filter: 'all',
        // type will be automatically inferred to number
        // nextId: 0,
    }),
    getters: {
        cart() {
            // autocompletion! ✨
            return this.items.filter(obj => obj.quantity > 0)
        },
        totalCartCount() {
            return this.items.reduce((totalQuantity, singleItem) => totalQuantity + singleItem.quantity, 0);
        }
    },
    actions: {
        // any amount of arguments, return a promise or not
        changeItems(items) {
            this.items = items
        },
    },
})