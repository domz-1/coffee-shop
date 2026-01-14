<template>
  <div class="h-screen flex items-center justify-center px-4 md:px-[69px]">
    <!-- Redesigned Hero Section -->
    <div class="absolute top-[-60%] right-[-10%] w-2/3 h-full z-0">
      <img
        src="../../../public/hero/beside-the-carousel.png"
        alt=""
        srcset=""
      />
    </div>
    <section
      class="relative w-full max-w-[100vm] h-[720px] flex items-center overflow-hidden rounded-[48px] shadow-sm"
    >
      <!-- Background Shapes -->
      <div
        class="relative z-10 w-full px-6 md:px-20 flex justify-between items-center h-full gap-12"
      >
        <!-- Content -->
        <div class="space-y-8 duration-1000">
          <div class="">
            <h1 class="flex items-center !h-fit">
              <img
                src="../../../public/hero/main-logo-hero.png"
                class="max-w-[351px]"
                alt=""
                srcset=""
              />
            </h1>
            <p
              class="text-neutral-500 text-xl max-w-md font-medium leading-relaxed"
            >
              Get your ordered (better) coffee delivered to you if you want.
            </p>
          </div>
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <button
              class="border border-neutral-300 hover:border-amber-600 text-neutral-800 px-8 py-3 rounded-full font-bold flex items-center group transition-all duration-300"
            >
              <span>SHOP 20% OFF</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </button>
            <button
              class="bg-[#004876] p-4 rounded-full text-white hover:bg-[#00365a] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </button>
          </div>
        </div>
        <!-- Visuals -->
        <div
          class="flex-1 h-full flex items-center justify-end overflow-hidden max-w-[800px]"
        >
          <swiper
            :modules="[Autoplay]"
            :slides-per-view="'auto'"
            :centered-slides="true"
            :loop="true"
            :autoplay="{ delay: 3000, disableOnInteraction: false }"
            :space-between="40"
            class="hero-swiper w-full overflow-visible!"
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
        </div>
      </div>
    </section>
  </div>
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
<style scoped>
.hero-swiper :deep(.swiper-slide) {
  opacity: 0.4;
  transition: opacity 0.7s ease;
}
.hero-swiper :deep(.swiper-slide-active) {
  opacity: 1;
}
.hero-swiper :deep(.swiper-slide) .product-container {
  transform: scale(0.6);
}
.hero-swiper :deep(.swiper-slide-active) .product-container {
  transform: scale(1);
}
.hero-swiper :deep(.swiper-slide-next) .product-container,
.hero-swiper :deep(.swiper-slide-prev) .product-container {
  transform: scale(0.7);
}
.animate-in {
  animation: fadeIn 1s ease-out forwards;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
