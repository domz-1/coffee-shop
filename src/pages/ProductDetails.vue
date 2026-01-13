<template>
  <div v-if="product" class="animate-in fade-in duration-700">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <!-- Image Gallery -->
      <div class="space-y-4">
        <div
          class="aspect-square rounded-3xl overflow-hidden bg-neutral-900 border border-neutral-800"
        >
          <img
            :src="activeImage"
            :alt="product.name"
            class="w-full h-full object-cover animate-in zoom-in-95 duration-500"
          />
        </div>
        <div class="flex space-x-4 rtl:space-x-reverse overflow-x-auto pb-2">
          <button
            v-for="(img, idx) in product.gallery"
            :key="idx"
            @click="activeImage = img"
            class="flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden border-2 transition-all duration-200"
            :class="
              activeImage === img
                ? 'border-amber-600 scale-95'
                : 'border-neutral-800 opacity-60 hover:opacity-100'
            "
          >
            <img :src="img" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>
      <!-- Info Section -->
      <div class="flex flex-col space-y-8">
        <div class="space-y-4">
          <div class="flex items-center space-x-2 rtl:space-x-reverse">
            <router-link
              to="/"
              class="text-amber-500 hover:underline text-sm"
              >{{ t("nav.home") }}</router-link
            >
            <span class="text-neutral-600">/</span>
            <span class="text-neutral-400 text-sm">{{ product.name }}</span>
          </div>
          <h1 class="text-4xl md:text-5xl font-bold leading-tight">
            {{ product.name }}
          </h1>
          <div class="flex items-center space-x-4 rtl:space-x-reverse">
            <span class="text-3xl font-bold text-amber-500"
              >${{ (product.price - product.discount).toFixed(2) }}</span
            >
            <span
              v-if="product.discount > 0"
              class="text-xl text-neutral-500 line-through"
              >${{ product.price.toFixed(2) }}</span
            >
            <span
              v-if="product.discount > 0"
              class="bg-amber-600/10 text-amber-500 px-3 py-1 rounded-full text-sm font-bold"
            >
              Save ${{ product.discount.toFixed(2) }}
            </span>
          </div>
        </div>
        <p class="text-lg text-neutral-400 leading-relaxed">
          {{ product.description }}
        </p>
        <div class="space-y-6 pt-6 border-t border-neutral-800">
          <div class="flex items-center space-x-6 rtl:space-x-reverse">
            <div
              class="flex items-center bg-neutral-900 rounded-xl px-4 py-2 border border-neutral-800"
            >
              <button
                @click="quantity > 1 && quantity--"
                class="text-2xl text-neutral-400 hover:text-white px-2"
              >
                -
              </button>
              <span class="text-xl font-bold px-4 min-w-[3rem] text-center">{{
                quantity
              }}</span>
              <button
                @click="quantity++"
                class="text-2xl text-neutral-400 hover:text-white px-2"
              >
                +
              </button>
            </div>
            <button
              @click="handleAddToCart"
              class="flex-1 bg-amber-600 hover:bg-amber-500 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 transform active:scale-95 shadow-lg shadow-amber-900/20"
            >
              {{ t("product.addToCart") }}
            </button>
          </div>
        </div>
        <!-- Reviews Section -->
        <div class="pt-8 space-y-6">
          <h2 class="text-2xl font-bold">{{ t("product.reviews") }}</h2>
          <div v-if="product.reviews.length" class="space-y-4">
            <div
              v-for="(review, idx) in product.reviews"
              :key="idx"
              class="bg-neutral-900 p-6 rounded-2xl border border-neutral-800"
            >
              <div class="flex justify-between items-start mb-2">
                <span class="font-bold text-neutral-200">{{
                  review.user
                }}</span>
                <div class="flex text-amber-500">
                  <span v-for="i in 5" :key="i" class="text-lg">
                    {{ i <= review.rating ? "★" : "☆" }}
                  </span>
                </div>
              </div>
              <p class="text-neutral-400">{{ review.comment }}</p>
            </div>
          </div>
          <div v-else class="text-neutral-500 italic">
            {{ t("product.noReviews") }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="text-center py-20">
    <p class="text-2xl text-neutral-500">Product not found.</p>
    <router-link to="/" class="text-amber-500 mt-4 block underline"
      >Back to home</router-link
    >
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { useProductStore } from "@/stores/useProductStore";
import { useCartStore } from "@/stores/useCartStore";
import type { Product } from "@/types";
const route = useRoute();
const { t } = useI18n();
const productStore = useProductStore();
const cartStore = useCartStore();
const product = ref<Product | null>(null);
const activeImage = ref("");
const quantity = ref(1);
onMounted(() => {
  const id = Number(route.params.id);
  product.value = productStore.getProductById(id) || null;
  if (product.value) {
    activeImage.value = product.value.image;
  }
});
const handleAddToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value, quantity.value);
    // Maybe add a toast notification here
  }
};
</script>
