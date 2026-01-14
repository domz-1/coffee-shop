import { defineStore } from "pinia";
import { ref } from "vue";
import type { Product } from "@/types";
import productsData from "@/lib/api/products.json";
export const useProductStore = defineStore("product", () => {
  const products = ref<Product[]>(productsData);
  const getProductById = (id: number) => {
    return products.value.find((p: Product) => p.id === id);
  };
  return {
    products,
    getProductById,
  };
});
