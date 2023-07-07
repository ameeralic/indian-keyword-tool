<template>
    <div class="w-screen h-screen">
        <div class="grid place-content-center h-full">
            <img :src="siteUrl + 'assets/vite.svg'" class="mx-auto w-1/2">
            <div class="">
                <RouterLink to="/menu">
                    <div
                        class="text-center border-2 rounded-xl py-2 mx-2 my-4 border-gray-600 px-4 hover:bg-gray-600 hover:text-white cursor-pointer">
                        Menu
                    </div>
                </RouterLink>
                <RouterLink to="/contact">
                    <div
                        class="text-center border-2 rounded-xl py-2 mx-2 my-4 border-gray-600 px-4 hover:bg-gray-600 hover:text-white cursor-pointer">
                        Contact
                    </div>
                </RouterLink>
            </div>
        </div>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';

const siteUrl = window.location.href;
</script>