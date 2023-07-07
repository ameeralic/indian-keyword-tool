import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => ({
        /** @type {{ text: string, id: number, isFinished: boolean }[]} */
        cart: [],
        /** @type {'all' | 'finished' | 'unfinished'} */
        // filter: 'all',
        // type will be automatically inferred to number
        // nextId: 0,
    }),
    // getters: {
    //     finishedTodos(state) {
    //         // autocompletion! ✨
    //         return state.todos.filter((todo) => todo.isFinished)
    //     },
    //     unfinishedTodos(state) {
    //         return state.todos.filter((todo) => !todo.isFinished)
    //     },
    //     /**
    //      * @returns {{ text: string, id: number, isFinished: boolean }[]}
    //      */
    //     filteredTodos(state) {
    //         if (this.filter === 'finished') {
    //             // call other getters with autocompletion ✨
    //             return this.finishedTodos
    //         } else if (this.filter === 'unfinished') {
    //             return this.unfinishedTodos
    //         }
    //         return this.todos
    //     },
    // },
    actions: {
        // any amount of arguments, return a promise or not
        changeCart(newCart) {
            this.cart = newCart
        },
        addToCart(item) {
            // you can directly mutate the state
            const check_index = this.cart.findIndex(cartItem => cartItem.id === item.id);
            if (check_index !== -1) {
                this.cart[check_index].quantity++;
                console.log("Quantity updated:", this.cart);
            } else {
                this.cart.push(item)
                console.log('The product has been added to cart:', this.cart);
            }
        },
    },
})