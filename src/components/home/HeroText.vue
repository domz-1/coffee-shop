<script setup lang="ts">
import { useLang } from "@/composables/useLang";
const { t } = useLang();
import { IconArrowDiagonal, IconQuickActions } from "@/components";
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
        <IconArrowDiagonal
          class="transform group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform rtl:group-hover:-translate-x-0.5"
        />
      </button>
      <button
        class="w-[46px] h-[46px] relative flex items-center justify-center group"
        aria-label="Quick Actions"
      >
        <IconQuickActions class="relative z-10" />
      </button>
    </div>
  </div>
</template>
