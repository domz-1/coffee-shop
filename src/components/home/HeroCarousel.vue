<template>
  <div class="relative w-full h-full group">
    <swiper
      :modules="[Autoplay, Navigation]"
      :slides-per-view="'auto'"
      :centered-slides="true"
      :loop="true"
      :autoplay="{ delay: 5000, disableOnInteraction: false }"
      :navigation="{
        prevEl: '.swiper-button-prev-custom',
        nextEl: '.swiper-button-next-custom',
      }"
      :space-between="0"
      class="w-full h-full overflow-visible! [&_.swiper-slide]:opacity-40 [&_.swiper-slide]:transition-all [&_.swiper-slide]:duration-700 [&_.swiper-slide-active]:opacity-100 [&_.swiper-slide_.product-container]:scale-[0.6] [&_.swiper-slide-active_.product-container]:scale-100 [&_.swiper-slide-next_.product-container]:scale-[0.7] [&_.swiper-slide-prev_.product-container]:scale-[0.7]"
    >
      <swiper-slide
        v-for="(product, index) in products"
        :key="index"
        class="w-[550px]!"
      >
        <div
          class="relative flex justify-center items-center h-[700px] transition-all duration-700 ease-out product-container"
        >
          <div
            class="absolute w-[400px] h-[400px] lg:w-[600px] lg:h-[600px] bg-[#004876] rounded-full z-0 transition-transform duration-700 bg-circle"
          ></div>
          <img
            :src="product.image"
            :alt="product.name"
            class="relative z-10 w-[550px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)] transition-transform duration-700 product-img"
          />
        </div>
      </swiper-slide>
    </swiper>
    <!-- Custom Navigation Arrows -->
    <button
      class="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg cursor-pointer transition-all opacity-0 group-hover:opacity-100 -translate-x-6 group-hover:translate-x-2"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 18L9 12L15 6"
          stroke="#004876"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button
      class="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg cursor-pointer transition-all opacity-0 group-hover:opacity-100 translate-x-6 group-hover:-translate-x-2"
    >
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9 18L15 12L9 6"
          stroke="#004876"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
const products = [
  { name: "Product 1", image: "/hero/product1.png" },
  { name: "Product 2", image: "/hero/product2.png" },
  { name: "Product 1 Duplicate", image: "/hero/product1.png" },
  { name: "Product 2 Duplicate", image: "/hero/product2.png" },
];
</script>
<style></style>
