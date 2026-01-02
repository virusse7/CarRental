<script setup>
const props = defineProps({
    title: {
        type: String,
    },
    icon: {
        type: String,
        default: ''
    },
    class: {
        type: [String, Array, Object],
        default: ''
    }
})

</script>

<template>
    <button class="btn-primary flex justify-center items-center gap-1" :class="props.class">
        <span>{{ title }}</span>
        <Icon v-if="icon" :name="icon" size="14" />
    </button>
</template>
