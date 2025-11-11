<script setup>
defineProps({
    name: String,
    review: String,
    country: String
})
</script>

<template>
    <div class="border border-link/45 rounded-lg p-2">
        <div class="flex flex-row items-center gap-2">
            <Icon name="carbon:user-avatar-filled" size="36" />
            <div class="">
                <h4 class="text-lg">{{ name }}</h4>
                <span>{{ country }}</span>
            </div>
        </div>
        <p class="text-xs text-header! mt-1">{{ review }}</p>
    </div>
</template>