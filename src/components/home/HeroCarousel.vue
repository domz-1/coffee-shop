<template>
  <swiper
    :modules="[Autoplay]"
    :slides-per-view="'auto'"
    :centered-slides="true"
    :loop="true"
    :autoplay="{ delay: 3000, disableOnInteraction: false }"
    :space-between="0"
    class="w-full h-full overflow-visible! [&_.swiper-slide]:opacity-40 [&_.swiper-slide]:transition-opacity [&_.swiper-slide]:duration-700 [&_.swiper-slide-active]:opacity-100 [&_.swiper-slide_.product-container]:scale-[0.6] [&_.swiper-slide-active_.product-container]:scale-100 [&_.swiper-slide-next_.product-container]:scale-[0.7] [&_.swiper-slide-prev_.product-container]:scale-[0.7]"
  >
    <swiper-slide
      v-for="(product, index) in products"
      :key="index"
      class="w-[450px]!"
    >
      <div
        class="relative flex justify-center items-center h-[600px] transition-all duration-700 ease-out product-container"
      >
        <div
          class="absolute w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] bg-[#004876] rounded-full z-0 transition-transform duration-700 bg-circle"
        ></div>
        <img
          :src="product.image"
          :alt="product.name"
          class="relative z-10 w-[450px] object-contain drop-shadow-2xl transition-transform duration-700 product-img"
        />
      </div>
    </swiper-slide>
  </swiper>
</template>
<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const products = [
  { name: "Product 1", image: "/hero/product1.png" },
  { name: "Product 2", image: "/hero/product2.png" },
  { name: "Product 1 Duplicate", image: "/hero/product1.png" },
  { name: "Product 2 Duplicate", image: "/hero/product2.png" },
];
</script>
