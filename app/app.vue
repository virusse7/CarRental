<script setup>
import Navbar from './components/ui/Navbar.vue';
import Footer from './components/ui/Footer.vue';

useHead({
    titleTemplate: 'Car Rental'
})
</script>

<template>
    <UApp>
        <div>
            <Navbar />
            <main>
                <NuxtPage />
            </main>
            <Footer />
        </div>
    </UApp>
</template>