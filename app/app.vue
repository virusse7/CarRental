<script setup>
import Navbar from './components/ui/Navbar.vue';
import Footer from './components/ui/Footer.vue';
</script>

<template>
    <div>
        <Navbar />
        <main>
            <NuxtPage />
        </main>
        <Footer />
    </div>
</template>