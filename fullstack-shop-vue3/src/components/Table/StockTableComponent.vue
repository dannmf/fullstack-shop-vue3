<!-- src/components/ProductTable.vue -->
<script setup lang="ts">
import DataTable from './DataTableComponent.vue'

defineProps<{
  data: Record<string, any>[]
}>()

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Nome' },
  { key: 'stock', label: 'Estoque' },
]

function getStockClass(value: number) {
  if (value <= 2) return 'ml-5 text-red-400'
  if (value <= 5) return 'ml-5 text-yellow-400'
  return 'ml-5 text-green-400'
}

function formatPrice(value: number) {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
</script>

<template>
  <DataTable
    :columns="columns"
    :data="data"
    :showActions="false"
    title="📦 Produtos com Baixo Estoque"
  >
    <template #cell-stock="{ value }">
      <span :class="['font-bold', getStockClass(value)]">{{ value }}</span>
    </template>

    <template #cell-price="{ value }">
      <span class="text-green-300">{{ formatPrice(value) }}</span>
    </template>
  </DataTable>
</template>
