<script setup>
import CtaButton from '~/components/ui/CtaButton.vue';

const props = defineProps({
    title: String,
    image: String,
    description: String,
    buttonText: String,
    class: {
        type: [String, Array, Object],
        default: ''
    }
})
</script>

<template>
    <div class="relative w-full rounded-lg overflow-hidden bg-cover bg-center flex justify-center" :class="props.class"
        :style="{ backgroundImage: image ? `url(${image})` : 'none' }">
        <div class="absolute inset-0 bg-black/20 backdrop-blur-xs"></div>

        <div class="relative z-10 p-2 flex flex-col justify-center gap-2">
            <span class="text-header! text-xl">{{ title }}</span>
            <p class="text-header! sm:w-2/3" v-if="description">{{ description }}</p>
            <CtaButton class="max-w-[180px]" v-if="buttonText" icon="ooui:arrow-next-ltr" :title="`${buttonText}`" />
        </div>
    </div>
</template>
