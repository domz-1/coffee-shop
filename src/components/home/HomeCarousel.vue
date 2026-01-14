<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Navigation } from "swiper/modules";
import { useLang } from "@/composables/useLang";
import "swiper/css";
import "swiper/css/navigation";
import { SwiperProducts } from "@/lib/constants";
const { locale, dir } = useLang();
import IconArrowCircleLeft from "@/components/icons/IconArrowCircleLeft.vue";
import IconArrowCircleRight from "@/components/icons/IconArrowCircleRight.vue";
</script>
<template>
  <div class="relative w-full h-full group translate-y-0 lg:translate-y-12">
    <swiper
      :key="locale"
      :dir="dir"
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
      class="w-full h-full overflow-visible! [&_.swiper-slide]:opacity-80 [&_.swiper-slide]:transition-all [&_.swiper-slide]:duration-700 [&_.swiper-slide-active]:opacity-100 [&_.swiper-slide_.product-container]:scale-[0.5] md:[&_.swiper-slide_.product-container]:scale-[0.6] [&_.swiper-slide-active_.product-container]:scale-100 [&_.swiper-slide-next_.product-container]:scale-[0.6] md:[&_.swiper-slide-next_.product-container]:scale-[0.7] [&_.swiper-slide-prev_.product-container]:scale-[0.0] ![&_.swiper-slide-prev]:opacity-[0.01] [&_.swiper-slide-next]:hidden! lg:[&_.swiper-slide-next]:block!"
    >
      <div
        class="absolute top-[10%] lg:top-[15%] right-4 md:right-[70px] rtl:right-auto rtl:left-4 rtl:md:left-[70px] flex flex-row items-start p-0 gap-2 w-auto h-[33px] z-30"
      >
        <button class="swiper-button-prev-custom" aria-label="Previous slide">
          <IconArrowCircleLeft class="rtl:rotate-180" />
        </button>
        <button class="swiper-button-next-custom" aria-label="Next slide">
          <IconArrowCircleRight class="rtl:rotate-180" />
        </button>
      </div>
      <swiper-slide
        v-for="(product, index) in SwiperProducts"
        :key="index"
        class="w-[300px] md:w-[450px]!"
      >
        <div class="w-full flex justify-center">
          <div
            class="relative flex justify-center items-center h-[400px] md:h-[600px] transition-all duration-700 ease-out product-container font-quicksand"
          >
            <div
              class="absolute w-[240px] h-[240px] md:w-[320px] md:h-[320px] lg:w-[480px] lg:h-[480px] rounded-full z-0 transition-transform duration-700 bg-circle"
              :style="{ background: product.bgColor }"
            ></div>
            <img
              :src="product.image"
              :alt="product.name"
              width="600"
              height="600"
              :loading="index === 0 ? 'eager' : 'lazy'"
              :fetchpriority="index === 0 ? 'high' : 'auto'"
              class="relative z-10 w-full max-w-[280px] md:max-w-none md:min-w-[560px] h-[300px] md:h-[600px]! object-contain transition-transform duration-700 product-img"
            />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<style scoped>
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
