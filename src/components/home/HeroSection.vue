<template>
  <div class="min-h-screen flex items-center justify-center px-4 md:px-0 bg-transparent pb-10 lg:pb-0 overflow-hidden!">
    <!-- Decorative Image (Mirrored in RTL) - Made bigger and repositioned -->
    <div class="absolute top-[-50%] w-screen h-screen scale-150 z-0 opacity-50 md:opacity-100 pointer-events-none transition-all duration-700
      right-[-15%] md:right-[-30%] rtl:right-auto rtl:left-[-15%] rtl:md:left-[-30%]">
      <img src="../../../public/hero/beside-the-carousel.png" alt=""
        class="w-full h-full object-contain rtl:scale-x-[-1]" />
    </div>

    <section class="relative w-full max-w-screen min-h-[720px] flex items-center overflow-hidden mt-12 md:mt-0">
      <!-- Container with logical padding/margin to handle 'space from start based on lang' -->
      <div class="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center h-full gap-12 py-10 lg:py-0
        ps-0 md:ps-20 rtl:ps-0 rtl:pe-0 rtl:md:ps-20">

        <!-- Text Content -->
        <div class="space-y-8 duration-1000 flex flex-col items-center lg:items-start text-center lg:text-left">
          <div class="mt-0 lg:mt-[21px]">
            <h1 class="flex items-center justify-center lg:justify-start">
              <img src="../../../public/hero/main-logo-hero.png" class="w-[280px] md:w-[351px] rtl:hidden"
                alt="Coffee Shop Logo" />
              <img src="../../../public/hero/main-logo-hero-rtl.png" class="w-[280px] md:w-[351px] hidden rtl:block"
                alt="Coffee Shop Logo" />
            </h1>
            <p class="text-neutral-500 text-base md:text-lg max-w-[300px] font-quicksand mt-[11px]">
              {{ t('home.subtitle') }}
            </p>
          </div>

          <div
            class="flex flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse gap-4 mt-">
            <button
              class="w-[205px] h-[46px] border border-[#6F4336] rounded-[16px] flex flex-row justify-center items-center p-0 gap-[16px] group transition-all duration-300 hover:bg-[#6F4336]/5 m-0">
              <span class="font-quicksand font-medium text-[16px] leading-[140%] uppercase text-[#6F4336]">
                {{ t('home.cta') }}
              </span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform rtl:group-hover:-translate-x-0.5">
                <path d="M4 4L12 12M12 12H7M12 12V7" stroke="#6F4336" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round" />
              </svg>
            </button>

            <button class="w-[46px] h-[46px] relative flex items-center justify-center group"
              aria-label="Quick Actions">
              <circle cx="23" cy="23" r="23" fill="#004876" class="absolute w-full h-full" />
              <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="relative z-10">
                <circle cx="23" cy="23" r="23" fill="#004876" />
                <path
                  d="M34.581 33.2577L33.6691 17.0736H29.1137V15.767C29.1137 12.5082 26.4052 9.85718 23.0758 9.85718C19.7465 9.85718 17.038 12.5083 17.038 15.767V17.0736H12.2854L11.5009 33.3277L11.5001 33.3559C11.4937 33.9408 11.7312 34.5149 12.1514 34.9303C12.5717 35.3462 13.1556 35.5849 13.7535 35.5849H32.331C32.9472 35.5849 33.5439 35.3337 33.9677 34.8954C34.3914 34.4571 34.615 33.8602 34.581 33.2577ZM18.6128 15.767C18.6128 13.3582 20.6148 11.3985 23.0758 11.3985C25.5367 11.3985 27.5389 13.3582 27.5389 15.767V17.0736H18.6126V15.767H18.6128ZM32.8239 33.8357C32.696 33.9677 32.5165 34.0434 H13.7533C13.5733 34.0434 13.3976 33.9716 13.2707 33.8461C13.1469 33.7239 13.0758 33.5558 13.0746 33.3834L13.7874 18.6149H17.0377V20.5667C17.0377 20.9924 17.3902 21.3374 17.8251 21.3374C18.26 21.3374 18.6125 20.9924 18.6125 20.5667V18.6149H27.5388V20.5667C27.5388 20.9924 27.8912 21.3374 28.3261 21.3374C28.761 21.3374 29.1134 20.9924 29.1134 20.5667V18.6149H32.1784L33.0082 33.3427C33.0188 33.5241 32.9515 33.7038 32.8239 33.8357Z"
                  fill="white" />
              </svg>
            </button>
          </div>
        </div>

        <!-- Carousel -->
        <div
          class="w-full flex-1 flex items-center justify-center lg:justify-end overflow-hidden max-w-[800px] lg:pl-16 mt-8 lg:mt-0">
          <HomeCarousel />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import HomeCarousel from './HomeCarousel.vue';
import { useLang } from '@/composables/useLang';

const { t } = useLang();
</script>
