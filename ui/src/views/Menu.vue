<template>
    <div class="max-w-4xl mx-auto">
        <Header></Header>
        <div class="md:mt-36 mt-24">
            <div class="border-2 rounded-xl py-2 mx-2 my-4 border-gray-600 px-4" v-for="item in items.items" :key="item"
                :class="{ 'bg-blue-700 text-white': item.quantity > 0 }">
                <div class="grid grid-cols-12 items-center">
                    <div class=" col-span-6">
                        <p>
                            {{ item.name }}
                        </p>
                    </div>
                    <div class=" col-span-2">
                        <p>
                            {{ item.price }}
                        </p>
                    </div>
                    <div class=" col-span-4 flex gap-2 items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-10 h-10 cursor-pointer"
                            @click="item.quantity > 0 ? item.quantity-- : item.quantity = 0">
                            <path fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm3 10.5a.75.75 0 000-1.5H9a.75.75 0 000 1.5h6z"
                                clip-rule="evenodd" />
                        </svg>

                        <p>
                            {{ item.quantity }}
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-10 h-10 cursor-pointer" @click="item.quantity++">
                            <path fill-rule="evenodd"
                                d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zM12.75 9a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"
                                clip-rule="evenodd" />
                        </svg>
                    </div>
                </div>

            </div>
        </div>

    </div>
</template>
<script>
import { getAllItems } from '../services/MenuService'

import { useCartStore } from '../stores/cart'
import { useItemsStore } from '../stores/items'

// const cart = useCartStore()

export default {
    data() {
        return {
            items: useItemsStore(),
            cart: useCartStore()
        }
    },
    // watch: {
    //     // whenever question changes, this function will run
    //     items: {
    //         handler(newValue, oldValue) {
    //             // Note: `newValue` will be equal to `oldValue` here
    //             // on nested mutations as long as the object itself
    //             // hasn't been replaced.
    //             this.cart.changeCart(this.items.items.filter(obj => obj.quantity > 0));
    //             console.log(this.cart.cart);
    //         },
    //         deep: true
    //     }
    // },
    // computed: {
    //     cart() {
    //         return this.items.items.filter(obj => obj.quantity > 0);
    //     }
    // },
    methods: {
        // taskCreate(data) {
        //   console.log('data:::', data)
        //   createTask(data).then(response => {
        //     console.log(response)
        //     this.getAllTasks();
        //   });
        // },
        getAllItems() {
            getAllItems().then(response => {
                console.log(response)
                // this.items = response.map(obj => ({ ...obj, quantity: 0 }))
                this.items.changeItems(response.map(obj => ({ ...obj, quantity: 0 })))
            })
        },
        // taskDelete(taskId) {
        //   deleteTask(taskId).then(response => {
        //     console.log(response)
        //     this.getAllTasks();
        //   });
        // },
        // taskEdit(task) {
        //   editTask(task).then(res => {
        //     console.log(res);
        //     this.getAllTasks();
        //   })
        // }
    },
    mounted() {
        console.log(this.items.items);
        if (this.items.items.length < 1) {
            this.getAllItems()

        }
    },
}
</script>
<script setup>
import Header from '../components/Header.vue'
</script>