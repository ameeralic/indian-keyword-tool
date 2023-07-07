<template>
    <div class="home">
        <div class="w-screen h-screen bg-center grid place-content-center"
            :style="`background-image: url(${siteUrl + 'assets/'})`">
            <div class="bg-white p-4 rounded-xl">
                <img :src="siteUrl + 'assets/vite.svg'" class="mx-auto">
                <h1 class="text-base text-center text-blue-400 my-4">Shop Name</h1>
                <div class="mx-auto text-center grid gap-2">
                    <router-link to="/">
                        <button class="text-xs bg-black text-white px-3 py-1 rounded-full cursor-pointer w-full">
                            Menu
                        </button>
                    </router-link>
                    <router-link to="/contact">
                        <button class="text-xs bg-black text-white px-3 py-1 rounded-full cursor-pointer w-full">
                            contact
                        </button>
                    </router-link>


                </div>
            </div>
        </div>
        <!-- <img :src="siteUrl + '/assets/vite.svg'"> -->
    </div>
</template>
<script setup>
const siteUrl = window.location.href;
</script>
