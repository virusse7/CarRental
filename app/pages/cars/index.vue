<script setup>
const { data: cars } = await useFetch('/api/cars')
</script>

<template>
    <div :key="car.id" v-for="car in cars">
        {{ car.brand }}
    </div>
</template>