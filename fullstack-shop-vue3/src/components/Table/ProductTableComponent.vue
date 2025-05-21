<!-- src/components/Table/ProductTableComponent.vue -->
<script setup lang="ts">
import DataTable from '@/components/Table/DataTableComponent.vue';


defineProps<{
  data: Record<string, any>[]
}>();

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nome' },
  { key: 'description', label: 'Descrição' },
  { key: 'price', label: 'Preço' },
  { key: 'stock', label: 'Estoque' },
  { key: 'categoryName', label: 'Categoria' },
];


function getStockClass(value: number) {
  if (value <= 2) return 'ml-5 text-red-400';
  if (value <= 5) return 'ml-5 text-yellow-400';
  return 'ml-5 text-green-400';
}

function formatPrice(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}  

</script>

<template>
  <div>
    <DataTable
      :columns="columns"
      :data="data"
      :showActions="true"
      title="📦 Lista de Produtos"
      subtitle="Gerencie seus produtos com facilidade"
    >
      <template #cell-stock="{ value }">
        <span :class="['font-bold', getStockClass(value)]">{{ value }}</span>
      </template>

      <template #cell-price="{ value }">
        <span class="text-green-300">{{ formatPrice(value) }}</span>
      </template>
    </DataTable>
    </div>
</template>