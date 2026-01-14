<template>
  <section id="products" class="py-20 px-4 max-w-[1440px] mx-auto text-center font-quicksand">
    <div class="mb-12">
      <p class="text-[#3B2F2F] font-normal text-xl mb-1">
        {{ t('home.ourProducts') }}
      </p>
      <h2 class="text-[#3B2F2F] font-bold text-[32px] leading-10">
        {{ t('home.categories.specialOffers') }}
      </h2>
    </div>

    <!-- Category Tabs -->
    <div class="flex justify-center mb-16 overflow-x-auto no-scrollbar">
      <div class="flex gap-8 relative items-center">
        <button v-for="cat in categoryList" :key="cat.id" @click="activeCategory = cat.id"
          class="text-base lg:text-xl font-medium whitespace-nowrap transition-colors relative pb-2"
          :class="activeCategory === cat.id ? 'text-[#004876]' : 'text-[#3B2F2F] font-normal'">
          {{ t(cat.labelKey) }}
          <span v-if="activeCategory === cat.id"
            class="absolute bottom-0 left-0 w-full h-0.5 bg-[#004876] rounded-full"></span>
        </button>
      </div>
    </div>

    <!-- Products Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 justify-items-center">
      <AnimatedContent v-for="product in filteredProducts" :key="product.id" direction="vertical" :distance="50"
        :delay="product.id * 0.1" class="w-full flex justify-center">
        <ProductCard :product="product" />
      </AnimatedContent>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import { useProductStore } from "@/stores/useProductStore";
import { useLang } from "@/composables/useLang";
import ProductCard from "./ProductCard.vue";
import AnimatedContent from "../AnimatedContent/AnimatedContent.vue";

const { t } = useLang();
const productStore = useProductStore();
const activeCategory = ref("all");

const categoryList = [
  { id: "all", labelKey: "home.categories.all", match: "All categories" },
  { id: "offers", labelKey: "home.categories.specialOffers", match: "Special offers" },
  { id: "bestseller", labelKey: "home.categories.bestSeller", match: "Best seller" },
  { id: "roasting", labelKey: "home.categories.roasting", match: "Roasting" },
  { id: "coffee", labelKey: "home.categories.coffee", match: "Coffee" },
  { id: "equipment", labelKey: "home.categories.equipment", match: "Coffee equipment" },
];

const filteredProducts = computed(() => {
  const selectedCat = categoryList.find(c => c.id === activeCategory.value);
  if (!selectedCat || selectedCat.id === "all") {
    return productStore.products;
  }
  return productStore.products.filter(
    (p) => p.category_en === selectedCat.match
  );
});
</script>

<style scoped>
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
