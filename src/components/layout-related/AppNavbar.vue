<script setup lang="ts">
import { useLang } from "@/composables/useLang";
import { useCartStore } from "@/stores/useCartStore";
const { locale, toggleLocale } = useLang();
const cartStore = useCartStore();
</script>
<template>
  <header
    class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1440px] h-[76px] flex items-center justify-between px-6 md:px-[69px] z-50"
  >
    <router-link to="/" class="flex items-center">
      <img
        src="/hero/top-simple-logo.png"
        alt="Coffee Logo"
        class="w-[34.5px] object-contain"
      />
    </router-link>
    <div class="flex items-center space-x-4 rtl:space-x-reverse">
      <div
        class="flex items-center space-x-[11px] rtl:space-x-reverse gap-[11px]"
      >
        <button
          @click="toggleLocale"
          class="text-cs-medici-blue! font-bold text-xs hover:opacity-80"
        >
          {{ locale === "en" ? "ع" : "EN" }}
        </button>
        <router-link to="/" class="relative flex items-center justify-center">
          <div
            class="w-[28px] h-[28px] bg-cs-medici-blue rounded-full flex items-center justify-center shadow-lg"
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.6667 4H2.33333L1 14.6667H13L11.6667 4Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linejoin="round"
              />
              <path
                d="M4.33334 6V4C4.33334 2.52724 5.52725 1.33333 7.00001 1.33333C8.47277 1.33333 9.66668 2.52724 9.66668 4V6"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
            <span
              v-if="cartStore.totalItems > 0"
              class="absolute -top-1 -right-1 bg-amber-600 text-white text-[8px] rounded-full h-3.5 w-3.5 flex items-center justify-center font-bold"
            >
              {{ cartStore.totalItems }}
            </span>
          </div>
        </router-link>
        <button class="text-black">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 12H21M3 6H21M3 18H21"
              stroke="#000000"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>
