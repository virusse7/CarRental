<script setup>
import bgImage from './assets/rolls.jpg'
</script>

<template>
    <section id="home">
        <div class="w-full h-160 p-3 bg-cover bg-center rounded-lg  flex flex-col gap-4 justify-center  md:my-2"
            :style="{ backgroundImage: `url(${bgImage})` }">
            <h1 class="text-3xl font-bold">Exlusive Taxis, Premier Service</h1>
            <p>Exclusive Taxi, Excellent Service. Offering luxury taxis with trained drivers to ensure your trip goes
                smoothly. Book now and enjoy a special trip.</p>
        </div>
    </section>
</template>