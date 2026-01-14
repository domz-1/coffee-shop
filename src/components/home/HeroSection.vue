<template>
  <div
    class="min-h-screen flex items-center justify-center px-4 md:px-0 bg-transparent pb-10 lg:pb-0 overflow-x-hidden! overflow-y-hidden!"
  >
    <div
      class="absolute top-[-50%] lg:top-[-20%] w-screen h-screen scale-150 z-0 opacity-50 md:opacity-100 pointer-events-none transition-all duration-700 right-[-15%] md:right-[-30%] rtl:right-auto rtl:left-[-15%] rtl:md:left-[-30%]"
    >
      <img
        src="../../../public/hero/beside-the-carousel.png"
        alt=""
        class="w-full h-full object-contain rtl:scale-x-[-1]"
      />
     
    </div>
     <div
      class="absolute w-fit  top-[-10%]  h-screen scale-100 z-0 opacity-50 md:opacity-100 pointer-events-none transition-all duration-700 left-[-0%] md:left-[-0%] rtl:left-auto rtl:right-[-0%] rtl:md:right-0"
    >
      <img
        src="../../../public/hero/squares-beside the text.png"
        alt=""
        class="w-full h-full object-contain rtl:scale-x-[-1]"
      />
     
    </div>
    <section
      class="relative w-full max-w-screen min-h-[720px] flex items-center overflow-hidden mt-12 md:mt-0"
    >
      <div
        class="relative z-10 w-full flex flex-col lg:flex-row justify-between items-center h-full gap-12 py-10 lg:py-0 ps-0 md:ps-[15%] rtl:ps-0 rtl:pe-0 rtl:md:ps-[15%]"
      >
        <div
          class="space-y-8 duration-1000 flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <div class="mt-0 lg:mt-[21px]">
            <h1 class="flex items-center justify-center lg:justify-start">
              <img
                src="../../../public/hero/main-logo-hero.png"
                class="w-[280px] md:w-[351px] rtl:hidden"
                alt="Coffee Shop Logo"
              />
              <img
                src="../../../public/hero/main-logo-hero-rtl.png"
                class="w-[280px] md:w-[351px] hidden rtl:block"
                alt="Coffee Shop Logo"
              />
            </h1>
            <p
              class="text-neutral-500 text-base md:text-lg max-w-[300px] font-quicksand mt-[11px]"
            >
              {{ t("home.subtitle") }}
            </p>
          </div>
          <div
            class="flex flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 rtl:space-x-reverse gap-4 mt-"
          >
            <button
              class="w-[205px] h-[46px] border border-[#6F4336] rounded-[16px] flex flex-row justify-center items-center p-0 gap-[16px] group transition-all duration-300 hover:bg-[#6F4336]/5 m-0"
            >
              <span
                class="font-quicksand font-medium text-[16px] leading-[140%] uppercase text-[#6F4336]"
              >
                {{ t("home.cta") }}
              </span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform rtl:group-hover:-translate-x-0.5"
              >
                <path
                  d="M4 4L12 12M12 12H7M12 12V7"
                  stroke="#6F4336"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <button
              class="w-[46px] h-[46px] relative flex items-center justify-center group"
              aria-label="Quick Actions"
            >
              <circle
                cx="23"
                cy="23"
                r="23"
                fill="#004876"
                class="absolute w-full h-full"
              />
              <svg
                width="46"
                height="46"
                viewBox="0 0 46 46"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="relative z-10"
              >
                <circle cx="23" cy="23" r="23" fill="#004876" />
                <path
                  d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2V6l-3-4H6z M3 6h18 M16 10a4 4 0 0 1-8 0"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
        <div
          class="w-full flex-1 flex items-center justify-center lg:justify-end overflow-hidden max-w-[800px] lg:pl-16 mt-8 lg:mt-0"
        >
          <HomeCarousel />
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import HomeCarousel from "./HomeCarousel.vue";
import { useLang } from "@/composables/useLang";
const { t } = useLang();
</script>
