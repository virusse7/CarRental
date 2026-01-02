<script setup>
import PromotionTile from './tiles/PromotionTile.vue';
import Tile from './tiles/Tile.vue';
import CtaTile from './tiles/CtaTile.vue';
import porschePhoto from './assets/porsche.webp'
import mercedesPhoto from './assets/mercedes.webp'
import audiPhoto from './assets/audi.jpeg'
import carInterior from './assets/carInterior.jpg'
import ferrariPhoto from './assets/ferrari.webp'
</script>

<template>
    <section id="promotions">
        <div class="flex flex-col justify-between md:items-center md:flex-row gap-2 mb-2">
            <h3 class="md:w-1/2 text-3xl">Experience luxury on wheels with exclusive savings</h3>
            <p class="md:w-1/2">
                Unllock the innacle of luxury travel with our fleet of vehicles, and elevate every journey with comfort
                and style.
                Take advantage of our saivngs to make your experience even more rewarding.
            </p>

        </div>
        <div class="flex flex-col gap-4 sm:gap-10">
            <div class="flex flex-col md:flex-row gap-4">
                <PromotionTile start-date="10 Feb" end-date="29 Feb 2025"
                    description="Experience the Holidays with Our Festive Promotions" discount="40"
                    :image="porschePhoto" />
                <PromotionTile start-date="15 Feb" end-date="29 Feb 2025"
                    description="Experience the Holidays with Our Festive Promotions" discount="45"
                    :image="mercedesPhoto" />
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <CtaTile class="md:row-span-2 h-60 md:h-full " title="Reserve Your Luxurious Journey Today"
                    description="Embark on a Stylish and Comfortable Ride with Our Exclusive Fleet"
                    button-text="Booking Now" :image="audiPhoto" />
                <Tile class="h-40 items-center" title="Curated Luxury Car Options" :image="ferrariPhoto" />
                <Tile class="h-40 items-center " title="Experienced Chauffeurs for a Seamless Ride"
                    :image="carInterior" />
            </div>
        </div>
    </section>
</template>