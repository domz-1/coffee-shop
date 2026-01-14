<template>
  <div
    v-if="product"
    class="product-details pb-20 pt-10 px-4 max-w-[1240px] mx-auto min-h-screen"
  >
    <!-- Breadcrumb -->
    <div class="mb-8">
      <router-link
        to="/"
        class="text-[#8B8BA5] font-quicksand hover:text-[#004876] transition-colors flex items-center gap-2"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Products
      </router-link>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
      <!-- Left Column: Gallery -->
      <div class="flex flex-col gap-6">
        <div class="relative group">
          <!-- Main Image Frame (Home page style) -->
          <div class="relative w-full aspect-square max-w-[500px] mx-auto">
            <div
              class="absolute inset-0 bg-[#004876] rounded-[60px] translate-x-2 translate-y-2"
            ></div>
            <div
              class="absolute inset-0 bg-[#6F4336] rounded-[60px] -translate-x-2 -translate-y-2"
            ></div>
            <div
              class="absolute inset-2 bg-white rounded-[60px] overflow-hidden border-4 border-white shadow-xl"
            >
              <img
                :src="activeImage"
                :alt="product.name"
                class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </div>
        <!-- Thumbnail Gallery -->
        <div class="flex gap-4 justify-center overflow-x-auto py-2">
          <button
            v-for="(img, idx) in allImages"
            :key="idx"
            @click="activeImage = img"
            class="relative w-24 h-24 rounded-2xl overflow-hidden border-2 transition-all"
            :class="
              activeImage === img
                ? 'border-[#004876] scale-105 shadow-md'
                : 'border-transparent opacity-70 hover:opacity-100'
            "
          >
            <img :src="img" class="w-full h-full object-cover" />
          </button>
        </div>
      </div>
      <!-- Right Column: Product Info -->
      <div class="flex flex-col">
        <span
          class="text-[#004876] font-poppins font-medium text-sm tracking-wider uppercase mb-2"
          >{{ product.category }}</span
        >
        <h1
          class="text-[#3B2F2F] font-quicksand font-bold text-4xl lg:text-5xl mb-4"
        >
          {{ product.name }}
        </h1>
        <p class="text-[#8B8BA5] font-quicksand text-lg mb-6 leading-relaxed">
          {{ product.description }}
        </p>
        <!-- Pricing -->
        <div class="flex items-center gap-4 mb-8">
          <div class="flex flex-col">
            <span
              v-if="product.discount > 0"
              class="text-[#8B8BA5] line-through text-lg font-poppins"
              >${{ product.price.toFixed(2) }}</span
            >
            <span class="text-[#3B2F2F] font-bold text-3xl font-poppins"
              >${{ (product.price - product.discount).toFixed(2) }}</span
            >
          </div>
          <span
            v-if="product.discount > 0"
            class="bg-[#F9EDBD] text-[#3B2F2F] px-4 py-1 rounded-full font-poppins text-sm font-medium"
          >
            Save ${{ product.discount.toFixed(2) }}
          </span>
        </div>
        <!-- Quantity & Add to Cart -->
        <div class="flex flex-col sm:flex-row gap-6 items-center mb-12">
          <div
            class="flex items-center border-2 border-[#E5E7EB] rounded-2xl p-1 bg-white shadow-sm"
          >
            <button
              @click="quantity > 1 ? quantity-- : null"
              class="w-12 h-12 flex items-center justify-center text-[#3B2F2F] hover:bg-gray-50 rounded-xl transition-colors"
            >
              <span class="text-2xl">-</span>
            </button>
            <span
              class="w-12 text-center font-bold text-xl text-[#3B2F2F] font-poppins"
              >{{ quantity }}</span
            >
            <button
              @click="quantity++"
              class="w-12 h-12 flex items-center justify-center text-[#3B2F2F] hover:bg-gray-50 rounded-xl transition-colors"
            >
              <span class="text-2xl">+</span>
            </button>
          </div>
          <button
            @click="handleAddToCart"
            class="flex-1 w-full bg-[#004876] text-white py-4 px-8 rounded-2xl font-quicksand font-bold text-xl shadow-lg hover:bg-[#00365a] transition-all hover:-translate-y-1 active:translate-y-0"
          >
            Add to Cart
          </button>
        </div>
        <!-- Product Author/Origin -->
        <div class="flex items-center gap-4 pt-8 border-t border-gray-100">
          <div
            class="w-12 h-12 bg-[#F9EDBD] rounded-full flex items-center justify-center text-[#3B2F2F] font-bold"
          >
            {{ product.author.charAt(0) }}
          </div>
          <div>
            <p class="text-[#8B8BA5] font-quicksand text-sm">
              Responsibly sourced by
            </p>
            <p class="text-[#3B2F2F] font-quicksand font-bold">
              {{ product.author }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Reviews Section -->
    <div class="mt-24 border-t border-gray-100 pt-16">
      <div
        class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6"
      >
        <div>
          <h2 class="text-[#3B2F2F] font-quicksand font-bold text-3xl mb-2">
            Customer Reviews
          </h2>
          <div class="flex items-center gap-2">
            <div class="flex text-[#E1B168]">
              <svg
                v-for="i in 5"
                :key="i"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </div>
            <span class="text-[#3B2F2F] font-quicksand font-medium"
              >4.8 out of 5</span
            >
            <span class="text-[#8B8BA5] font-quicksand"
              >({{ product.reviews?.length || 0 }} reviews)</span
            >
          </div>
        </div>
        <button
          class="text-[#004876] font-quicksand font-bold border-2 border-[#004876] px-6 py-3 rounded-xl hover:bg-[#004876] hover:text-white transition-all"
        >
          Write a Review
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(review, idx) in product.reviews"
          :key="idx"
          class="bg-white p-8 rounded-[30px] shadow-sm border border-gray-50 flex flex-col gap-4 hover:shadow-md transition-shadow"
        >
          <div class="flex justify-between items-center">
            <div class="flex gap-1 text-[#E1B168]">
              <svg
                v-for="i in 5"
                :key="i"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                :fill="i <= review.rating ? 'currentColor' : 'none'"
                stroke="currentColor"
              >
                <path
                  d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                />
              </svg>
            </div>
            <span class="text-[#8B8BA5] text-sm font-poppins"
              >Verified Purchase</span
            >
          </div>
          <p
            class="text-[#3B2F2F] font-quicksand italic text-lg leading-relaxed"
          >
            "{{ review.comment }}"
          </p>
          <div class="flex items-center gap-3 mt-2">
            <div
              class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-[#3B2F2F]"
            >
              {{ review.user.charAt(0) }}
            </div>
            <span class="text-[#3B2F2F] font-quicksand font-bold">{{
              review.user
            }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else class="flex flex-col items-center justify-center min-h-[60vh]">
    <div
      class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#004876] mb-4"
    ></div>
    <p class="text-[#8B8BA5] font-quicksand">Loading product details...</p>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/useProductStore";
import { useCartStore } from "@/stores/useCartStore";
import type { Product } from "@/types";
const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();
const product = ref<Product | null>(null);
const activeImage = ref("");
const quantity = ref(1);
const allImages = computed(() => {
  if (!product.value) return [];
  return [product.value.image, ...(product.value.gallery || [])];
});
onMounted(() => {
  const id = parseInt(route.params.id as string);
  const found = productStore.getProductById(id);
  if (found) {
    product.value = found;
    activeImage.value = found.image;
  }
});
const handleAddToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value, quantity.value);
  }
};
</script>
<style scoped>
.font-quicksand {
  font-family: "Quicksand", sans-serif;
}
.font-poppins {
  font-family: "Poppins", sans-serif;
}
</style>
