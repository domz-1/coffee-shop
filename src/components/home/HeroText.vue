<script setup lang="ts">
import { useLang } from "@/composables/useLang";
const { t } = useLang();
</script>
<template>
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
        class="w-[205px] h-[46px] border border-cs-uluru-sunset rounded-[16px] flex flex-row justify-center items-center p-0 gap-[16px] group transition-all duration-300 hover:bg-cs-uluru-sunset/5 m-0"
      >
        <span
          class="font-quicksand font-medium text-[16px] leading-[140%] uppercase text-cs-uluru-sunset"
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
</template>
