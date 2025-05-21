<script setup>
import ProductTableComponent from '@/components/Table/ProductTableComponent.vue';
import { useProductStore } from '@/stores/product';

const productStore = useProductStore();

</script>

<template>
    <main>
        <ProductTableComponent :data="productStore.allProducts"/>
    </main>    
</template>