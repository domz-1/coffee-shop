<template>
  <router-link
    :to="`/product/${product.id}`"
    class="w-full max-w-[287px] flex flex-col items-center group"
  >
    <div class="relative w-[287px] h-[300px] flex items-center justify-center">
      <div class="absolute inset-0 rounded-b-[50px] rounded-t-[10px]! z-0 overflow-hidden">
        <img
          src="/products-section/image copy.png"
          class="w-full h-full object-cover"
          alt=""
        />
      </div>
      <div
        class="absolute inset-0 bg-transparent rounded-b-[50px] rounded-t-[10px]! overflow-hidden z-20 border-[3px] border-white/50 flex items-center justify-center m-auto w-[90%] h-[90%]"
      >
        <img
          :src="product.image"
          :alt="locale === 'ar' ? product.name_ar : product.name_en"
          class="w-full h-full object-cover mix-blend-multiply transition-transform duration-500"
        />
        <div
          v-if="product.discount > 0"
          class="absolute top-6 left-6 bg-[#F9EDBD] px-3 py-1 rounded-[4px] shadow-sm"
        >
          <span class="text-[#3B2F2F] font-quicksand text-xs font-bold"
            >-{{ product.discount }}%</span
          >
        </div>
      </div>
    </div>
    <div class="mt-6 text-center w-full">
      <h3
        class="text-[#3B2F2F] font-quicksand font-bold text-xl lg:text-[22px] leading-7"
      >
        {{ locale === "ar" ? product.name_ar : product.name_en }}
      </h3>
      <p
        class="text-[#8B8BA5] font-quicksand font-medium text-sm lg:text-base mt-1"
      >
        {{ locale === "ar" ? product.author_ar : product.author_en }}
      </p>
      <div class="flex gap-1 mt-3 justify-center">
        <span v-for="i in 5" :key="i" class="text-[#E1B168]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            />
          </svg>
        </span>
      </div>
    </div>
  </router-link>
</template>
<script setup lang="ts">
import type { Product } from "@/types";
import { useLang } from "@/composables/useLang";
const { locale } = useLang();
defineProps<{
  product: Product;
}>();
</script>
<style scoped>
.rounded-card {
  border-radius: 50px;
}
</style>
