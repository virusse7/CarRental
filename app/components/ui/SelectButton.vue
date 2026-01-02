<script setup>
const props = defineProps({
    title: {
        type: String,
    }
})

</script>

<template>
    <button class="">
        <span>{{ title }}</span>
    </button>
</template>
