<template>
  <div
    :dir="locale === 'ar' ? 'rtl' : 'ltr'"
    class="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-amber-500 selection:text-white"
  >
    <nav
      class="sticky top-0 z-50 bg-neutral-900/80 backdrop-blur-md border-b border-neutral-800"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <router-link
            to="/"
            class="flex items-center space-x-2 rtl:space-x-reverse group"
          >
            <span
              class="text-2xl font-bold bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:to-amber-500 transition-all duration-300"
            >
              Coffee Haven
            </span>
          </router-link>
          <div
            class="flex items-center space-x-6 rtl:space-x-reverse text-sm font-medium"
          >
            <router-link
              to="/"
              class="hover:text-amber-500 transition-colors duration-200"
              >{{ t("nav.home") }}</router-link
            >
            <div
              class="hidden sm:flex items-center space-x-4 rtl:space-x-reverse border-l border-neutral-800 pl-4 rtl:border-l-0 rtl:border-r rtl:pl-0 rtl:pr-4"
            >
              <button
                @click="toggleLocale"
                class="hover:text-amber-500 transition-all duration-300 p-2 hover:bg-neutral-800 rounded-full"
                :title="
                  locale === 'en' ? 'Switch to Arabic' : 'Switch to English'
                "
              >
                {{ locale === "en" ? "AR" : "EN" }}
              </button>
              <div class="relative group">
                <router-link
                  to="/"
                  class="flex items-center hover:text-amber-500 transition-colors duration-200"
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
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span
                    v-if="cartStore.totalItems > 0"
                    class="absolute -top-2 -right-2 bg-amber-600 text-white text-[10px] rounded-full h-5 w-5 flex items-center justify-center font-bold animate-pulse"
                  >
                    {{ cartStore.totalItems }}
                  </span>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer class="bg-neutral-900 border-t border-neutral-800 py-12 mt-20">
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="text-neutral-500 text-sm">
          © 2026 Coffee Haven. Built with Vue 3 & Tailwind 4.
        </p>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useCartStore } from "@/stores/useCartStore";
import { watchEffect } from "vue";
const { t, locale } = useI18n();
const cartStore = useCartStore();
const toggleLocale = () => {
  locale.value = locale.value === "en" ? "ar" : "en";
};
watchEffect(() => {
  document.documentElement.dir = locale.value === "ar" ? "rtl" : "ltr";
  document.documentElement.lang = locale.value;
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
