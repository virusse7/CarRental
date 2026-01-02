<script setup>
import porsche from './porsche.avif'

defineProps({
    fullName: String,
    avatar: String,
    rating: String,
    percentRating: String,
    price: String,
    car: String,
    time: String,
    class: {
        type: [String, Array, Object],
        default: ''
    }
})
</script>

<template>
    <div class="relative text-header! h-60 flex flex-col justify-between rounded-lg overflow-hidden" :class="class">
        <img class="hidden sm:block absolute right-0 top-20 translate-y-1/2 translate-x-1/2 w-[340px] z-1"
            :src="porsche" alt="car" />
        <div class="p-2 flex flex-col gap-2">

            <div class="flex flex-row justify-between items-start">
                <div class="flex flex-row items-center gap-1">
                    <Icon :name="avatar" size="36" />
                    <div class="flex flex-col">
                        <span class="text-xs">{{ fullName }}</span>
                        <span class="font-bold">{{ car }}</span>
                    </div>
                </div>
                <div class="flex flex-row items-center gap-1">
                    <Icon name="tabler:clock-hour-4" />
                    <span class="text-sm">{{ time }} mins</span>
                </div>
            </div>
            <div class="flex flex-col ">
                <div class="flex flex-row items-center gap-1">
                    <Icon name="material-symbols:star-rate" />
                    {{ rating }}
                </div>
                <span class="text-xs">{{ percentRating }}% Recommend Driver</span>
            </div>
        </div>
        <div class="flex flex-row items-center gap-1 bg-black  rounded-l-none rounded-full w-fit p-2 z-10">
            <div class="flex flex-col">
                <span>Travel Expense</span>
                <span class="text-2xl font-bold">${{ price }}</span>
            </div>
            <button @click=""
                class="cursor-pointer rounded-full p-2 m-2 flex bg-link hover:bg-link-hover text-black duration-500 transition-colors">
                <Icon name="ooui:arrow-next-ltr" size="20" />
            </button>
        </div>
    </div>
</template>