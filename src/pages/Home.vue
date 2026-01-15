<script setup lang="ts">
import { defineAsyncComponent } from "vue";
import { HeroSection } from "@/components";
const MarqueeSection = defineAsyncComponent(
  () => import("@/components/home/MarqueeSection.vue"),
);
const ProductsSection = defineAsyncComponent(
  () => import("@/components/home/ProductsSection.vue"),
);
const WelcomeSection = defineAsyncComponent(
  () => import("@/components/home/WelcomeSection.vue"),
);
</script>
<template>
  <div class="home-page">
    <HeroSection />
    <MarqueeSection />
    <ProductsSection />
    <WelcomeSection />
  </div>
</template>
