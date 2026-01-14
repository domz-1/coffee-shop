<template>
  <div :dir="locale === 'ar' ? 'rtl' : 'ltr'" class="min-h-screen bg-white">
    <AppNavbar />
    <main>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { watchEffect } from "vue";
import AppNavbar from "@/components/layout-related/AppNavbar.vue";
import AppFooter from "@/components/layout-related/AppFooter.vue";
const { locale } = useI18n();
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
