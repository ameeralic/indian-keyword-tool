<template>
    <h1
        class="fixed max-w-4xl mx-auto top-0 left-0 right-0 text-base md:text-xl px-4 font-bold py-4 md:py-10 border-b-2 border-gray-600 bg-white flex justify-between items-center">
        <RouterLink to="/menu">
            <div class=" cursor-pointer hover:text-blue-600" :class="{ 'underline text-blue-600': $route.name === 'Menu' }">
                Menu
            </div>
        </RouterLink>
        <RouterLink to="/cart">
            <!-- <div class=" cursor-pointer hover:text-blue-600"
                    :class="{ 'underline text-blue-600': $route.name === 'Cart' }">
                    Cart
                </div> -->
            <button type="button"
                class="relative inline-flex items-center p-2 text-sm font-medium text-center cursor-pointer rounded-lg hover:text-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-7 h-7"
                    :class="{ 'text-blue-600': $route.name === 'Cart' }">
                    <path fill-rule="evenodd"
                        d="M7.5 6v.75H5.513c-.96 0-1.764.724-1.865 1.679l-1.263 12A1.875 1.875 0 004.25 22.5h15.5a1.875 1.875 0 001.865-2.071l-1.263-12a1.875 1.875 0 00-1.865-1.679H16.5V6a4.5 4.5 0 10-9 0zM12 3a3 3 0 00-3 3v.75h6V6a3 3 0 00-3-3zm-3 8.25a3 3 0 106 0v-.75a.75.75 0 011.5 0v.75a4.5 4.5 0 11-9 0v-.75a.75.75 0 011.5 0v.75z"
                        clip-rule="evenodd" />
                </svg>


                <span class="sr-only">Notifications</span>
                <div
                    class="absolute inline-flex items-center justify-center w-6 h-6 text-xs text-white bg-red-500 border-1 border-white rounded-full -top-2 -right-2">
                    {{ items.totalCartCount }}</div>
            </button>
        </RouterLink>
    </h1>
</template>
<script>
import { useItemsStore } from '../stores/items'

export default {
    data() {
        return {
            items: useItemsStore()
        }
    },
}
</script>