<template>
  <router-link
    :to="`/product/${product.id}`"
    class="product-card flex flex-col items-center group cursor-pointer"
  >
    <div
      class="relative w-[287px] h-[300px] transition-transform duration-300 group-hover:scale-[1.02]"
    >
      <!-- Layered background effect -->
      <!-- Rectangle 7 (Blue) -->
      <div class="absolute inset-0 bg-[#004876] rounded-[50px]"></div>
      <!-- Rectangle 9 (Brown) -->
      <div
        class="absolute top-0 right-0 w-[280px] h-[294px] bg-[#6F4336] rounded-[50px]"
      ></div>
      <!-- Rectangle 8 (Image Container) -->
      <div
        class="absolute left-[9px] top-[9px] w-[271px] h-[285px] bg-[#C4C4C4] rounded-[50px] overflow-hidden border-4 border-white shadow-lg"
      >
        <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-full object-cover"
        />
      </div>
      <!-- Discount Badge -->
      <div
        v-if="product.discount > 0"
        class="absolute top-8 left-8 bg-[#F9EDBD] px-3 py-1 rounded-sm z-10 shadow-sm transition-transform group-hover:scale-110"
      >
        <span class="text-[#3B2F2F] font-poppins text-xs font-normal"
          >-{{ product.discount }}%</span
        >
      </div>
    </div>
    <!-- Info -->
    <div class="mt-4 text-center">
      <h3
        class="text-[#3B2F2F] font-quicksand font-medium text-[22px] leading-7"
      >
        {{ product.name }}
      </h3>
      <p class="text-[#8B8BA5] font-quicksand font-normal text-base mt-1">
        {{ product.author }}
      </p>
      <!-- Stars -->
      <div class="flex gap-1 mt-2 justify-center">
        <span v-for="i in 5" :key="i" class="text-[#E1B168]">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
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
defineProps<{
  product: Product;
}>();
</script>
<style scoped>
.product-card {
  width: 100%;
  max-width: 287px;
}
.font-quicksand {
  font-family: "Quicksand", sans-serif;
}
.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
