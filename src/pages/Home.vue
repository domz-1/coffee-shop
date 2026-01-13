<template>
  <div class="space-y-20 pb-20">
    <!-- Hero Section -->
    <section
      class="relative h-[60vh] flex items-center justify-center overflow-hidden rounded-3xl"
    >
      <div
        class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=2000')] bg-cover bg-center"
      >
        <div
          class="absolute inset-0 bg-neutral-950/60 backdrop-blur-[2px]"
        ></div>
      </div>
      <div
        class="relative text-center space-y-6 px-4 animate-in fade-in slide-in-from-bottom-8 duration-1000"
      >
        <h1 class="text-5xl md:text-7xl font-bold text-white tracking-tight">
          {{ t("home.title") }}
        </h1>
        <p class="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
          {{ t("home.subtitle") }}
        </p>
        <div class="flex justify-center pt-4">
          <button
            @click="scrollToMenu"
            class="bg-amber-600 hover:bg-amber-500 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl shadow-amber-900/20 transform hover:scale-105 transition-all duration-300"
          >
            {{ t("home.cta") }}
          </button>
        </div>
      </div>
    </section>
    <!-- Product Grid -->
    <section id="menu" class="space-y-12">
      <div class="flex flex-col items-center space-y-4">
        <h2 class="text-3xl md:text-4xl font-bold">
          {{ t("home.ourProducts") }}
        </h2>
        <div class="h-1 w-20 bg-amber-600 rounded-full"></div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(product, index) in productStore.products"
          :key="product.id"
          class="group bg-neutral-900 rounded-2xl overflow-hidden border border-neutral-800 hover:border-amber-600/50 transition-all duration-500 hover:-translate-y-2"
          :style="{ animationDelay: `${index * 100}ms` }"
        >
          <router-link :to="`/product/${product.id}`" class="block">
            <div class="relative aspect-square overflow-hidden">
              <img
                :src="product.image"
                :alt="product.name"
                class="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div
                v-if="product.discount > 0"
                class="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg"
              >
                SALE
              </div>
            </div>
            <div class="p-6 space-y-4">
              <div class="flex justify-between items-start">
                <h3
                  class="text-xl font-bold group-hover:text-amber-500 transition-colors duration-300"
                >
                  {{ product.name }}
                </h3>
                <div class="text-right">
                  <p class="text-lg font-bold text-amber-500">
                    ${{ (product.price - product.discount).toFixed(2) }}
                  </p>
                  <p
                    v-if="product.discount > 0"
                    class="text-sm text-neutral-500 line-through"
                  >
                    ${{ product.price.toFixed(2) }}
                  </p>
                </div>
              </div>
              <p class="text-neutral-400 text-sm line-clamp-2">
                {{ product.description }}
              </p>
              <button
                @click.prevent="cartStore.addToCart(product)"
                class="w-full bg-neutral-800 hover:bg-amber-600 text-white py-3 rounded-xl transition-all duration-300 flex items-center justify-center space-x-2 rtl:space-x-reverse"
              >
                <span>{{ t("product.addToCart") }}</span>
              </button>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useProductStore } from "@/stores/useProductStore";
import { useCartStore } from "@/stores/useCartStore";
const { t } = useI18n();
const productStore = useProductStore();
const cartStore = useCartStore();
const scrollToMenu = () => {
  const el = document.getElementById("menu");
  el?.scrollIntoView({ behavior: "smooth" });
};
</script>
