import { fetchLowStockProducts, fetchProducts, fetchProductsCount } from "@/services/product";
import type { Product } from "@/types/product";
import { defineStore } from "pinia";

export const useProductStore = defineStore('product', {
    state: () => ({
        productsCount: 0,
        lowStockProducts: [] as Product[],
        allProducts: [] as Product[],
        editProduct: {} as Product,

    }),
    actions: {
        async loadDashboardData() {
            this.allProducts = await fetchProducts(1, 10);
            this.productsCount = await fetchProductsCount();
            this.lowStockProducts = await fetchLowStockProducts();
            this.editProduct = this.allProducts[0];
        }
    }

})