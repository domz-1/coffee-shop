import { defineStore } from "pinia";
import { ref, computed } from "vue";
import type { Product, CartItem } from "@/types";
export const useCartStore = defineStore("cart", () => {
    const items = ref<CartItem[]>([]);
    const totalItems = computed(() =>
        items.value.reduce((acc: number, item: CartItem) => acc + item.quantity, 0),
    );
    const totalPrice = computed(() =>
        items.value.reduce(
            (acc: number, item: CartItem) => acc + (item.price - item.discount) * item.quantity,
            0,
        ),
    );
    const addToCart = (product: Product, quantity: number = 1) => {
        const existing = items.value.find((item) => item.id === product.id);
        if (existing) {
            existing.quantity += quantity;
        } else {
            items.value.push({ ...product, quantity });
        }
    };
    const removeFromCart = (productId: number) => {
        items.value = items.value.filter((item) => item.id !== productId);
    };
    const updateQuantity = (productId: number, quantity: number) => {
        const item = items.value.find((item) => item.id === productId);
        if (item && quantity > 0) {
            item.quantity = quantity;
        }
    };
    return {
        items,
        totalItems,
        totalPrice,
        addToCart,
        removeFromCart,
        updateQuantity,
    };
});
