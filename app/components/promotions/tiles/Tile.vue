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
    <div class="bg-cover bg-center w-full rounded-lg flex flex-col gap-1 justify-center p-2" :class="props.class"
        :style="{ backgroundImage: image ? `url(${image})` : 'none' }">
        <span class="text-header! text-xl">{{ title }}</span>
        <p v-if="description">{{ description }}</p>
        <CtaButton class="max-w-[180px]" v-if="buttonText" icon="ooui:arrow-next-ltr" :title="`${buttonText}`" />
    </div>
</template>