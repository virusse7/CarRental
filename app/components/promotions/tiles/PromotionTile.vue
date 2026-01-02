<script setup>
defineProps({
    startDate: String,
    endDate: String,
    discount: String,
    description: String,
    image: String
})
</script>

<template>
    <div class="w-full bg-cover bg-center rounded-lg h-60 flex flex-col gap-2 justify-center p-3 md:my-2"
        :style="{ backgroundImage: image ? `url(${image})` : 'none' }">
        <div class="flex flex-row justify-between items-center gap-2">
            <div class="bg-link rounded-full flex items-center justify-center p-1">
                <Icon class="bg-black" name="material-symbols:percent-discount-outline" size="18" />
            </div>
            <span class="bg-paragraph/60 rounded-full py-1.5 px-2 text-center text-xs sm:text-sm text-header">
                Valid only on {{ startDate }} - {{ endDate }}
            </span>
        </div>
        <p class="md:w-2/3 text-header!">{{ description }}</p>
        <span class="text-2xl font-bold text-header">{{ discount }}%</span>
        <p class="text-xs">*With Terms and condition</p>
    </div>
</template>
