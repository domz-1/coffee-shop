<template>
  <section class="products-section py-20 px-4 max-w-[1240px] mx-auto">
    <!-- Header -->
    <div class="text-center mb-12">
      <p class="text-[#3B2F2F] font-quicksand font-normal text-xl mb-1">
        Our products
      </p>
      <h2
        class="text-[#3B2F2F] font-quicksand font-bold text-[32px] leading-10"
      >
        Special to Try
      </h2>
    </div>
    <!-- Tabs -->
    <div class="flex justify-center mb-16 overflow-x-auto">
      <div class="flex gap-8 pb-4 relative">
        <button
          v-for="category in categories"
          :key="category"
          @click="activeCategory = category"
          class="text-xl font-medium whitespace-nowrap transition-colors"
          :class="
            activeCategory === category
              ? 'text-[#004876]'
              : 'text-[#3B2F2F] font-normal'
          "
        >
          {{ category }}
          <div
            v-if="activeCategory === category"
            class="absolute bottom-0 h-0.5 bg-[#004876] transition-all duration-300 rounded-full"
            :style="underlineStyle"
          ></div>
        </button>
      </div>
    </div>
    <!-- Grid -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center"
    >
      <ProductCard
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </section>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";
import { useProductStore } from "@/stores/useProductStore";
import ProductCard from "./ProductCard.vue";
const productStore = useProductStore();
const activeCategory = ref("All categories");
const categories = [
  "All categories",
  "Special offers",
  "Best seller",
  "Roasting",
  "Coffee",
  "Coffee equipment",
];
const filteredProducts = computed(() => {
  if (activeCategory.value === "All categories") {
    return productStore.products;
  }
  return productStore.products.filter(
    (p) => p.category === activeCategory.value,
  );
});
const underlineStyle = computed(() => {
  return {};
});
</script>
<style scoped>
.font-quicksand {
  font-family: "Quicksand", sans-serif;
}
button {
  font-family: "Quicksand", sans-serif;
}
</style>
