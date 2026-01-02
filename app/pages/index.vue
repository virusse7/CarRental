<script setup>
import Faq from '~/components/ui/Faq.vue';
import CustomersReview from '~/components/customers-review/CustomersReview.vue';
import PromotionsSection from '~/components/promotions/PromotionsSection.vue';
import CarsList from '~/components/cars/CarsList.vue';
import HeroSection from '~/components/hero-section/HeroSection.vue';
</script>

<template>
    <div>
        <HeroSection />
        <CarsList />
        <PromotionsSection />
        <CustomersReview />
        <Faq />
    </div>
</template>