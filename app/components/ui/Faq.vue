<script setup>
const items = ref([
    {
        label: 'What is CarRental?',
        content: 'CarRental is a modern and convenient car rental service that allows you to rent vehicles for short or long trips. Whether you need a compact city car or a premium SUV, we make the process simple, transparent, and stress-free.'
    },
    {
        label: 'How do I place an order with CarRental?',
        content: 'You can easily book your vehicle online. Simply select your preferred car, choose your pickup and return dates, and complete your reservation — all in just a few clicks. You’ll receive instant confirmation once your booking is completed.'
    },
    {
        label: 'What vehicles does CarRental offer?',
        content: 'CarRental offers a wide range of vehicles to suit your needs — from economy and compact cars to luxury sedans, SUVs, and vans. Whatever your trip requires, we have the right car for you.'
    },
    {
        label: 'Does CarRental operate in my city?',
        content: 'We currently operate in multiple cities across the country. Enter your location during booking to see if CarRental services are available in your area. Our network is constantly expanding!'
    },
    {
        label: 'Can I track my order in real time?',
        content: 'At the moment, real-time order tracking is not yet available. However, we’re actively working on this feature and plan to introduce it in the near future to make your rental experience even smoother.'
    }
])

</script>

<template>
    <section class="flex flex-col sm:grid sm:grid-cols-2 gap-2">
        <div class="flex flex-col gap-4">
            <h3 class="text-3xl">
                Frequently Asked Questions (FAQ)
            </h3>
            <p>
                Welcome to our FAQ section. Find answers to the most frequently asked questions to help you make
                informed
                decisions.
            </p>
            <div class="flex flex-col items-center sm:flex-row gap-4">
                <div class="relative w-full max-w-xs">
                    <Icon name="ic:outline-email" class="absolute left-3 top-1/2 -translate-y-1/2 text-paragraph" />
                    <input type="email" placeholder="Enter your email"
                        class="text-sm w-full border-2 border-paragraph rounded-full py-2 pl-10 pr-3 focus:outline-none focus:border-primary transition" />
                </div>
                <Button
                    class="btn-primary text-sm flex flex-row items-center justify-center gap-2 w-full max-w-xs sm:max-w-[120px]">
                    <span>Submit</span>
                    <Icon name="ooui:arrow-next-ltr" />
                </Button>
            </div>
        </div>
        <UAccordion class="text-header" :items="items">
            <template #content="{ item }">
                <span class="text-sm text-paragraph">{{ item.content }}</span>
            </template>
        </UAccordion>
    </section>
</template>