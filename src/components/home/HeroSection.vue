<template>
    <div class="relative h-screen flex items-center justify-center overflow-hidden">
        <!-- Background Shape (Beside the Carousel) -->
        <div class="absolute -top-[20%] -right-[10%] w-[60%] h-full z-0 pointer-events-none opacity-80">
            <img src="/hero/beside-the-carousel.png" alt="" class="w-full h-full object-contain">
        </div>

        <section class="relative w-full max-w-[1440px] px-6 md:px-[69px] z-10">
            <div class="flex flex-col md:flex-row items-center justify-between gap-12">
                <!-- Content Left -->
                <div class="w-full md:w-1/2 space-y-8 animate-in fade-in duration-1000">
                    <div class="space-y-4">
                        <img src="/hero/main-logo-hero.png" alt="Coffee & Shop"
                            class="w-full max-w-[500px] object-contain" />
                        <p class="text-neutral-500 text-xl font-medium leading-relaxed max-w-md">
                            Get your ordered (better) coffee delivered to you if you want.
                        </p>
                    </div>

                    <div class="flex items-center space-x-6 rtl:space-x-reverse">
                        <button
                            class="border border-neutral-300 hover:border-amber-600 text-neutral-800 px-10 py-4 rounded-full font-bold flex items-center group transition-all duration-300">
                            <span>SHOP 20% OFF</span>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                                fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </button>
                        <button
                            class="bg-[#004876] p-4 rounded-full text-white shadow-lg shadow-[#004876]/20 hover:bg-[#00365a] transition-all transform hover:scale-110">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                        </button>
                    </div>
                </div>

                <!-- Swiper Right -->
                <div class="w-full md:w-1/2 h-[600px] flex items-center">
                    <HeroSwiper />
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import HeroSwiper from './HeroSwiper.vue';
</script>

<style scoped>
.animate-in {
    animation: fadeIn 1s ease-out forwards;
}

@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateX(-30px);
    }

    to {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>
