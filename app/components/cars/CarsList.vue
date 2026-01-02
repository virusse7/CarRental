<script setup>
import SelectButton from '../ui/SelectButton.vue';
import CarTile from './CarTile.vue';
import carsData from './data/cars.json'

const categories = [
    { label: 'Suv', value: 'suv' },
    { label: 'Sport', value: 'sport' },
    { label: 'Limousine', value: 'limousine' },
    { label: 'Sedan', value: 'sedan' }
]
const selected = ref('suv')
const currentCarTiles = computed(() => carsData[selected.value])
</script>

<template>
    <section id="cars">
        <div class="flex flex-col items-center gap-2 sm:flex-row sm:justify-between mb-6">
            <h3 class=" text-3xl">Line Up Luxury Car</h3>
            <div class="flex flex-row gap-2">
                <SelectButton
                    class="p-2 text-header hover:text-header/70 hover:border-link-hover transition duration-500"
                    :class="selected === category.value ? 'border-b border-link' : ''"
                    @click="selected = category.value" v-for="category in categories" :title="category.label" />
            </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:w-3/4 2xl:mx-auto 2xl:gap-6 gap-4">
            <CarTile v-for="tile in currentCarTiles" v-bind="tile" :class="tile.bgColor" :key="tile.id" />
        </div>
    </section>
</template>