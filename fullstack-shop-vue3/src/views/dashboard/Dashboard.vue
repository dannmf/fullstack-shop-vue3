<!-- src/views/dashboard/Dashboard.vue -->
<script setup lang="ts">
import { useProductStore } from '@/stores/product';
import Navbar from '@/components/NavBarComponent.vue'
import Card from '@/components/CardComponent.vue';
import { onMounted } from 'vue';
import StockTableComponent from '@/components/Table/StockTableComponent.vue';
import { useRouter, useRoute } from 'vue-router';

const productStore = useProductStore();
const router = useRouter();
const route = useRoute();

onMounted(async () => {
  await productStore.loadDashboardData();
})


type CardType = 'users' | 'products' | 'categories';

const routeName = {
  users: '/users',
  products: '/products',
  categories: '/categories'
};

const handleCardClick = (card: CardType) => {
  router.push(routeName[card]);
};
</script>

<template>

  <main>

    <Navbar />
    <div v-if="route.path === '/'">
      <h1 class="text-3xl font-bold text-white p-4">Contagem</h1>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card title="Usuários" :count="productStore.productsCount" icon="🥷🏼"  />
        <Card title="Produtos" :count="productStore.productsCount" icon="📦" :onClick="() => handleCardClick('products')" />
        <Card title="Categorias" :count="productStore.productsCount" icon="📖" />

      </div>

      <StockTableComponent :data="productStore.lowStockProducts" />
    </div>

    <router-view></router-view>
  </main>
</template>
