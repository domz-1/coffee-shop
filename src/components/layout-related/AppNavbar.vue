<script setup lang="ts">
import { useLang } from "@/composables/useLang";
import { useCartStore } from "@/stores/useCartStore";
import { IconCart, IconMenu } from "@/components";
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
        <router-link
          to="/"
          class="relative flex items-center justify-center"
          aria-label="View Cart"
        >
          <div
            class="w-[28px] h-[28px] bg-cs-medici-blue rounded-full flex items-center justify-center shadow-lg"
          >
            <IconCart class="text-white" />
            <span
              v-if="cartStore.totalItems > 0"
              class="absolute -top-1 -right-1 bg-amber-600 text-white text-[8px] rounded-full h-3.5 w-3.5 flex items-center justify-center font-bold"
            >
              {{ cartStore.totalItems }}
            </span>
          </div>
        </router-link>
        <button class="text-black" aria-label="Toggle Menu">
          <IconMenu />
        </button>
      </div>
    </div>
  </header>
</template>
