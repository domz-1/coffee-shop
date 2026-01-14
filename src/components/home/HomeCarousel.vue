<template>
  <div class="relative w-full h-full group translate-y-0 lg:translate-y-12">
    <swiper :key="locale" :dir="dir" :modules="[Autoplay, Navigation]" :slides-per-view="'auto'" :centered-slides="true"
      :loop="true" :autoplay="{ delay: 5000, disableOnInteraction: false }" :navigation="{
        prevEl: '.swiper-button-prev-custom',
        nextEl: '.swiper-button-next-custom',
      }" :space-between="0"
      class="w-full h-full overflow-visible! [&_.swiper-slide]:opacity-80 [&_.swiper-slide]:transition-all 
      [&_.swiper-slide]:duration-700 [&_.swiper-slide-active]:opacity-100 [&_.swiper-slide_.product-container]:scale-[0.5] 
      md:[&_.swiper-slide_.product-container]:scale-[0.6] [&_.swiper-slide-active_.product-container]:scale-100 
      [&_.swiper-slide-next_.product-container]:scale-[0.6] md:[&_.swiper-slide-next_.product-container]:scale-[0.7] 
      [&_.swiper-slide-prev_.product-container]:scale-[0.0] ![&_.swiper-slide-prev]:opacity-[0.01]
      [&_.swiper-slide-next]:hidden! lg:[&_.swiper-slide-next]:block!">
      <div
        class="absolute top-[10%] lg:top-[15%] right-4 md:right-[70px] rtl:right-auto rtl:left-4 rtl:md:left-[70px] flex flex-row items-start p-0 gap-2 w-auto h-[33px] z-30">
        <button class="swiper-button-prev-custom" aria-label="Previous slide">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="rtl:rotate-180">
            <path d="M13.3337 20L19.167 25.8334M26.667 20H13.3337H26.667ZM13.3337 20L19.167 14.1667L13.3337 20Z"
              stroke="#3B2F2F" stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M20.0003 36.6666C10.7957 36.6666 3.33366 29.2046 3.33366 20C3.33366 10.7952 10.7957 3.33331 20.0003 3.33331C29.2051 3.33331 36.667 10.7952 36.667 20C36.667 29.2046 29.2051 36.6666 20.0003 36.6666Z"
              stroke="#3B2F2F" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
        <button class="swiper-button-next-custom" aria-label="Next slide">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="rtl:rotate-180">
            <path
              d="M19.9997 36.6666C29.2043 36.6666 36.6663 29.2046 36.6663 20C36.6663 10.7952 29.2043 3.33331 19.9997 3.33331C10.7949 3.33331 3.33301 10.7952 3.33301 20C3.33301 29.2046 10.7949 36.6666 19.9997 36.6666Z"
              fill="#004876" />
            <path d="M26.6663 20L20.833 25.8334M13.333 20H26.6663H13.333ZM26.6663 20L20.833 14.1667L26.6663 20Z"
              stroke="white" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      <swiper-slide v-for="(product, index) in products" :key="index" class="w-[300px] md:w-[450px]!">
        <AnimatedContent direction="vertical" :distance="50" :delay="index * 0.1" class="w-full flex justify-center">
          <div
            class="relative flex justify-center items-center h-[400px] md:h-[600px] transition-all duration-700 ease-out product-container font-quicksand">
            <div
              class="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] lg:w-[480px] lg:h-[480px] rounded-full z-0 transition-transform duration-700 bg-circle"
              :style="{ background: product.bgColor }"></div>
            <img :src="product.image" :alt="product.name"
              class="relative z-10 w-full max-w-[280px] md:max-w-none md:min-w-[560px] h-[300px] md:h-[600px]! object-contain transition-transform duration-700 product-img" />
          </div>
        </AnimatedContent>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import { useLang } from "@/composables/useLang";
import AnimatedContent from "../AnimatedContent/AnimatedContent.vue";
import "swiper/css";
import "swiper/css/navigation";
const { locale, dir } = useLang();
const products = [
  {
    name: "Product 1",
    image: "/hero/product2.png",
    bgColor: "linear-gradient(to bottom, #6F4336 0%, #3B2F2F 100%)",
  },
  {
    name: "Product 2",
    image: "/hero/product1.png",
    bgColor: "linear-gradient(to bottom, #004876 0%, #1E71A6 100%)",
  },
  {
    name: "Product 1 Duplicate",
    image: "/hero/product2.png",
    bgColor: "linear-gradient(to bottom, #6F4336 0%, #3B2F2F 100%)",
  },
  {
    name: "Product 2 Duplicate",
    image: "/hero/product1.png",
    bgColor: "linear-gradient(to bottom, #004876 0%, #1E71A6 100%)",
  },
];
</script>
<style scoped>
/* Swiper overflow fix for custom layout */
:deep(.swiper) {
  padding-top: 0;
}

@media (min-width: 768px) {
  :deep(.swiper) {
    padding-top: 50px !important;
  }
}

@media (min-width: 1024px) {
  :deep(.swiper) {
    padding-top: 0 !important;
  }
}
</style>
