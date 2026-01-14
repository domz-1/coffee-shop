<template>
  <div class="min-h-screen bg-white font-quicksand" :dir="dir">
    <!-- Breadcrumbs -->
    <div class="pt-24 md:pt-32 px-4 max-w-[1440px] mx-auto">
      <router-link to="/"
        class="text-[#8B8BA5] font-quicksand hover:text-[#004876] transition-colors flex items-center gap-2 group">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
          class="transform group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform"
          :class="isRtl ? 'rotate-180' : ''">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        <span class="font-medium">{{ t('product.back') }}</span>
      </router-link>
    </div>

    <div v-if="product" class="pb-20 pt-10 px-4 max-w-[1440px] mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
        <!-- Product Images -->
        <div class="flex flex-col gap-6">
          <div class="relative group">
            <div class="relative w-full aspect-square max-w-[500px] mx-auto">
              <!-- Background Layers (Matching Home Style) -->
              <div class="absolute inset-0 bg-[#004876] rounded-[60px] translate-x-4 translate-y-4 rtl:-translate-x-4">
              </div>
              <div class="absolute inset-0 bg-[#6F4336] rounded-[60px] -translate-x-2 -translate-y-2 rtl:translate-x-2">
              </div>
              <div
                class="absolute inset-0 bg-[#F4F4F4] rounded-[60px] overflow-hidden border-4 border-white shadow-xl flex items-center justify-center p-8">
                <img :src="activeImage" :alt="locale === 'ar' ? product.name_ar : product.name_en"
                  class="w-full h-full object-contain mix-blend-multiply transition-transform duration-500" />
              </div>
            </div>
          </div>
          <!-- Thumbnails -->
          <div class="flex gap-4 justify-center overflow-x-auto py-4 no-scrollbar">
            <button v-for="(img, idx) in allImages" :key="idx" @click="activeImage = img"
              class="relative w-24 h-24 shrink-0 rounded-2xl overflow-hidden border-2 transition-all p-2 bg-gray-50 flex items-center justify-center"
              :class="activeImage === img
                ? 'border-[#004876] scale-105 shadow-md bg-white'
                : 'border-transparent opacity-70 hover:opacity-100'
                ">
              <img :src="img" class="max-w-full max-h-full object-contain mix-blend-multiply" />
            </button>
          </div>
        </div>

        <!-- Product Details -->
        <div class="flex flex-col text-left rtl:text-right">
          <span class="text-[#004876] font-quicksand font-bold text-sm tracking-wider uppercase mb-2">
            {{ locale === 'ar' ? product.category_ar : product.category_en }}
          </span>
          <h1 class="text-[#3B2F2F] font-quicksand font-bold text-4xl lg:text-5xl mb-4">
            {{ locale === 'ar' ? product.name_ar : product.name_en }}
          </h1>
          <p class="text-[#8B8BA5] font-quicksand font-medium text-lg mb-8 leading-relaxed max-w-xl">
            {{ locale === 'ar' ? product.description_ar : product.description_en }}
          </p>

          <div class="flex items-center gap-4 mb-8">
            <div class="flex flex-col">
              <span v-if="product.discount > 0" class="text-[#8B8BA5] line-through text-lg font-quicksand">
                ${{ product.price.toFixed(2) }}
              </span>
              <span class="text-[#3B2F2F] font-bold text-4xl font-quicksand">
                ${{ (product.price - product.discount).toFixed(2) }}
              </span>
            </div>
            <span v-if="product.discount > 0"
              class="bg-[#F9EDBD] text-[#3B2F2F] px-4 py-1 rounded-full font-quicksand text-sm font-bold shadow-sm">
              {{ t('product.save') }} ${{ product.discount.toFixed(2) }}
            </span>
          </div>

          <!-- Quantity and Add to Cart -->
          <div class="flex flex-col sm:flex-row gap-6 items-center mb-12">
            <div class="flex items-center border-2 border-[#E5E7EB] rounded-2xl p-1 bg-white shadow-sm">
              <button @click="quantity > 1 ? quantity-- : null"
                class="w-12 h-12 flex items-center justify-center text-[#3B2F2F] hover:bg-gray-50 rounded-xl transition-colors"
                aria-label="Decrease quantity">
                <span class="text-2xl font-bold">-</span>
              </button>
              <span class="w-12 text-center font-bold text-xl text-[#3B2F2F] font-quicksand">{{ quantity }}</span>
              <button @click="quantity++"
                class="w-12 h-12 flex items-center justify-center text-[#3B2F2F] hover:bg-gray-50 rounded-xl transition-colors"
                aria-label="Increase quantity">
                <span class="text-2xl font-bold">+</span>
              </button>
            </div>
            <button @click="handleAddToCart"
              class="flex-1 w-full bg-[#004876] text-white py-4 px-8 rounded-2xl font-quicksand font-bold text-xl shadow-lg hover:bg-[#00365a] transition-all hover:scale-[1.02] active:scale-95">
              {{ t('product.addToCart') }}
            </button>
          </div>

          <div class="flex items-center gap-4 pt-8 border-t border-gray-100">
            <div
              class="w-12 h-12 bg-[#F9EDBD] rounded-full flex items-center justify-center text-[#3B2F2F] font-bold text-lg">
              {{ (locale === 'ar' ? product.author_ar : product.author_en)?.charAt(0) || 'C' }}
            </div>
            <div>
              <p class="text-[#8B8BA5] font-quicksand text-sm font-medium">
                {{ t('product.responsibleSource') }}
              </p>
              <p class="text-[#3B2F2F] font-quicksand font-bold">
                {{ locale === 'ar' ? product.author_ar : product.author_en }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Reviews Section -->
      <div class="mt-24 border-t border-gray-100 pt-16">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div class="text-left rtl:text-right">
            <h2 class="text-[#3B2F2F] font-quicksand font-bold text-3xl mb-2">
              {{ t('product.reviews') }}
            </h2>
            <div class="flex items-center gap-2">
              <div class="flex text-[#E1B168]">
                <svg v-for="i in 5" :key="i" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span class="text-[#3B2F2F] font-quicksand font-bold">4.8 {{ t('product.outOf5') }}</span>
              <span class="text-[#8B8BA5] font-quicksand font-medium mx-2">({{ product.reviews?.length || 0 }}
                {{ t('product.reviews').toLowerCase() }})</span>
            </div>
          </div>
          <button
            class="text-[#004876] font-quicksand font-bold border-2 border-[#004876] px-8 py-3 rounded-2xl hover:bg-[#004876] hover:text-white transition-all shadow-sm">
            {{ t('product.writeReview') }}
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(review, idx) in product.reviews" :key="idx"
            class="bg-[#FDFDFD] p-8 rounded-[40px] shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-md transition-shadow text-left rtl:text-right">
            <div class="flex justify-between items-center">
              <div class="flex gap-1 text-[#E1B168]">
                <svg v-for="i in 5" :key="i" width="18" height="18" viewBox="0 0 24 24"
                  :fill="i <= review.rating ? 'currentColor' : 'none'" stroke="currentColor" stroke-width="1">
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
              </div>
              <span class="text-[#8B8BA5] text-xs font-quicksand font-bold uppercase tracking-wider">
                {{ t('product.verifiedPurchase') }}
              </span>
            </div>
            <p class="text-[#3B2F2F] font-quicksand italic text-lg leading-relaxed font-medium">
              "{{ locale === 'ar' ? review.comment_ar : review.comment_en }}"
            </p>
            <div class="flex items-center gap-3 mt-2 border-t border-gray-50 pt-4">
              <div
                class="w-8 h-8 bg-[#F9EDBD] rounded-full flex items-center justify-center text-xs font-bold text-[#3B2F2F]">
                {{ review.user?.charAt(0) || 'U' }}
              </div>
              <span class="text-[#3B2F2F] font-quicksand font-bold text-sm">{{
                review.user
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Error/Loading States -->
    <div v-else-if="loading" class="flex flex-col items-center justify-center min-h-[60vh] font-quicksand">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#004876] mb-4"></div>
      <p class="text-[#8B8BA5] font-bold">{{ t('product.loading') }}</p>
    </div>

    <div v-else class="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center font-quicksand">
      <div class="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#8B8BA5" stroke-width="2">
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="8" x2="12" y2="12" />
          <line x1="12" y1="16" x2="12.01" y2="16" />
        </svg>
      </div>
      <h2 class="text-[#3B2F2F] font-bold text-2xl mb-2">{{ t('product.notFound') }}</h2>
      <p class="text-[#8B8BA5] mb-8">{{ t('product.notFoundDesc') }}
      </p>
      <router-link to="/" class="bg-[#004876] text-white px-8 py-3 rounded-xl font-bold">
        {{ t('product.returnShop') }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "@/stores/useProductStore";
import { useCartStore } from "@/stores/useCartStore";
import { useLang } from "@/composables/useLang";
import type { Product } from "@/types";

const route = useRoute();
const productStore = useProductStore();
const cartStore = useCartStore();
const { t, locale, isRtl, dir } = useLang();

const product = ref<Product | null>(null);
const activeImage = ref("");
const quantity = ref(1);
const loading = ref(true);

const allImages = computed(() => {
  if (!product.value) return [];
  return [product.value.image, ...(product.value.gallery || [])];
});

const loadProduct = () => {
  loading.value = true;
  const id = parseInt(route.params.id as string);
  const found = productStore.getProductById(id);

  if (found) {
    product.value = found;
    activeImage.value = found.image;
    quantity.value = 1;
  } else {
    product.value = null;
  }
  loading.value = false;
};

onMounted(loadProduct);

watch(() => route.params.id, loadProduct);

const handleAddToCart = () => {
  if (product.value) {
    cartStore.addToCart(product.value, quantity.value);
  }
};
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
