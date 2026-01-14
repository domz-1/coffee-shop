<template>
  <div :dir="dir" class="min-h-screen bg-white">
    <AppNavbar />
    <main>
      <router-view v-slot="{ Component, route }">
        <transition name="fade" mode="out-in">
          <component :is="Component" :key="route.fullPath" />
        </transition>
      </router-view>
    </main>
    <AppFooter />
  </div>
</template>
<script setup lang="ts">
import { useLang } from "@/composables/useLang";
import AppNavbar from "@/components/layout-related/AppNavbar.vue";
import AppFooter from "@/components/layout-related/AppFooter.vue";
const { dir } = useLang();
</script>
