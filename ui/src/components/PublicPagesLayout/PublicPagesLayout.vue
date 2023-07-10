<template>
    <Header></Header>
    <div class="bg-gray-50 dark:bg-gray-900">
        <slot></slot>
        <Footer></Footer>
    </div>
</template>
<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'

</script>