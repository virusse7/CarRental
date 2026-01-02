<script setup>

const mobileItems = [
    {
        label: 'Menu',
        icon: 'ci:hamburger',
        children: [
            { label: 'Home', href: '#home' },
            { label: 'Cars', href: '#cars' },
            { label: 'Promotions', href: '#promotions' },
            { label: 'Customers', href: '#customers' },
            { label: 'Questions', href: '#questions' }
        ]
    }
]

const desktopItems = [
    { label: 'Home', href: '#home' },
    { label: 'Cars', href: '#cars' },
    { label: 'Promotions', href: '#promotions' },
    { label: 'Customers', href: '#customers' },
    { label: 'Questions', href: '#questions' }
]
</script>


<template>
    <UNavigationMenu :items="mobileItems" :ui="{ childList: 'flex flex-col items-center navbar' }" trailing-icon="false"
        class="md:hidden flex justify-end mt-2" />

    <UNavigationMenu :items="desktopItems" class="hidden md:flex justify-center gap-6 mt-2" trailing-icon="false" :ui="{
        list: 'flex gap-6',
        item: 'text-sm font-medium hover:text-primary transition'
    }" />

</template>