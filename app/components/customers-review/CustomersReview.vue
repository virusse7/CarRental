<script setup>
import reviews from './data/reviews.json';
import ReviewTile from './ReviewTile.vue';
import CtaButton from '../ui/CtaButton.vue';

import { ref } from 'vue';

const visibleReviews = 6
const showAll = ref(false);
</script>

<template>
    <section id="customers">
        <div class="flex flex-col justify-between md:items-center md:flex-row gap-2">
            <h3 class="text-3xl">What our enchanted customers say</h3>
            <p class="md:w-1/2">
                Discover why thousands of drivers choose us every day.
                Real experiences from real customers who trusted our car rental service.
            </p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            <ReviewTile v-for="review in reviews.slice(0, visibleReviews)" :key="review.id" v-bind="review" />
        </div>

        <transition name="fade">
            <div v-if="showAll === true" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-3">
                <ReviewTile v-for="review in reviews.slice(visibleReviews)" :key="review.id" v-bind="review" />
            </div>

        </transition>

        <div class="flex justify-center items-center mt-4">
            <CtaButton @click="showAll = !showAll" :title="`${showAll ? 'Show less' : 'Show more'}`" />
        </div>
    </section>
</template>