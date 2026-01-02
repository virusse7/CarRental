<script setup>
</script>

<template>
    <footer class="footer">
        <div class="flex flex-col justify-center items-center">
            <div>
                <div class="flex flex-col items-center">
                    <NuxtLink to="/" class="flex flex-row items-center justify-start gap-2">
                        <Icon name="ic:baseline-directions-car-filled" />
                        <span class="text-xl font-heading">Car rental</span>
                    </NuxtLink>
                    <p class="text-center">
                        Carental is a modern car rental service designed for convenience and
                        transparency.
                        Choose from a wide range of vehicles, book in minutes, and enjoy a smooth, worry-free driving
                        experience.
                    </p>
                </div>
                <div class="flex flex-row items-center justify-center gap-2 py-2">
                    <NuxtLink to="">
                        <Icon size="18" name="ic:baseline-facebook" />
                    </NuxtLink>
                    <NuxtLink to="">
                        <Icon size="18" name="mdi:instagram" />
                    </NuxtLink>
                    <NuxtLink to="">
                        <Icon size="18" name="mdi:youtube" />
                    </NuxtLink>
                    <NuxtLink to="">
                        <Icon size="18" name="line-md:twitter-x" />
                    </NuxtLink>
                </div>
            </div>

            <div class="text-paragraph flex flex-col xl:flex-row xl:gap-8 gap-2 text-xs">
                <div class="flex flex-row items-center gap-2">
                    <Icon size="18" class="text-primary" name="ic:baseline-location-on" />
                    <span>Oxford Ave. Cary, NC 27511</span>
                </div>
                <div class="flex flex-row items-center gap-2">
                    <Icon size="18" class="text-primary" name="ic:outline-email" />
                    <a href="mailto:">car-rental@gmail.com</a>
                </div>
                <div class="flex flex-row items-center gap-2">
                    <Icon size="18" class="text-primary" name="material-symbols:call" />
                    <span>+1 444 444 444</span>
                </div>
            </div>
        </div>
    </footer>
</template>