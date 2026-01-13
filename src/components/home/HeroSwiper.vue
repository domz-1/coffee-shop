<template>
    <div class="h-full w-full overflow-visible">
        <swiper :modules="[Autoplay]" :slides-per-view="1.5" :centered-slides="false" :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }" :space-between="40"
            class="hero-swiper w-full h-full !overflow-visible">
            <swiper-slide v-for="(product, index) in products" :key="index" class="!w-[450px]">
                <div
                    class="relative flex justify-center items-center h-full transition-all duration-700 ease-out product-container">
                    <div
                        class="absolute w-[300px] h-[300px] lg:w-[480px] lg:h-[480px] bg-[#004876] rounded-full z-0 transition-transform duration-700 bg-circle">
                    </div>
                    <img :src="product.image" :alt="product.name"
                        class="relative z-10 w-[420px] object-contain drop-shadow-2xl transition-transform duration-700 product-img" />
                </div>
            </swiper-slide>
        </swiper>
    </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const products = [
    { name: 'Product 1', image: '/hero/product1.png' },
    { name: 'Product 2', image: '/hero/product2.png' },
    { name: 'Product 1 Duplicate', image: '/hero/product1.png' },
    { name: 'Product 2 Duplicate', image: '/hero/product2.png' },
];
</script>

<style scoped>
.hero-swiper :deep(.swiper-slide) {
    opacity: 1;
    transition: all 0.7s ease;
}

.hero-swiper :deep(.swiper-slide) .product-container {
    transform: scale(0.65);
    opacity: 0.5;
}

.hero-swiper :deep(.swiper-slide-active) .product-container {
    transform: scale(1);
    opacity: 1;
}

.hero-swiper :deep(.swiper-slide-next) .product-container {
    transform: scale(0.7);
    opacity: 0.6;
}
</style>
