import { fetchLowStockProducts, fetchProductsCount, fetchRecentProducts } from "@/services/product";
import { defineStore } from "pinia";

export const useProductStore = defineStore('product', {
    state: () => ({
        productsCount: 0,
        recentProducts: [] as Array<[id: number, name: string, price: number]>,
        lowStockProducts: [] as Array<[id: number, name: string, stock:number]>,

    }),
    actions: {
        async loadDashboardData() {
        this.productsCount = await fetchProductsCount(),
        this.recentProducts = await fetchRecentProducts(),
        this.lowStockProducts = await fetchLowStockProducts()
        }}
    
})