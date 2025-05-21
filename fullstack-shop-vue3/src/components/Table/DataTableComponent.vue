<!-- src/components/DataTableComponent.vue -->
<script setup lang="ts">
defineProps<{
  showActions: boolean;
  title: string;
  subtitle?: string;
  buttonLabel?: string;
  columns: { key: string; label: string }[];
  data: Record<string, any>[];
}>();

defineEmits(['edit', 'delete', 'add']);
</script>

<template>
  <div class="p-6 bg-gray-900 text-white min-h-screen">
    <div class="flex items-center justify-between mb-6">
      <div>
        <h2 class="text-2xl font-semibold">{{ title }}</h2>
        <p v-if="subtitle" class="text-sm text-gray-400">
          {{ subtitle }}
        </p>
      </div>
      <button
        v-if="showActions"
        class="px-4 py-2 bg-teal-700 hover:bg-teal-600 text-white rounded-lg font-medium"
        @click="$emit('add')"
      >
        {{ buttonLabel ?? 'Adicionar' }}
      </button>
    </div>

    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-700">
        <thead class="bg-gray-800 text-left text-sm font-semibold">
          <tr>
            <th v-for="col in columns" :key="col.key" class="px-6 py-3">
              {{ col.label }}
            </th>
            <th v-if="showActions" class="px-12 py-3 text-right">Ações</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-800 text-sm">
          <tr v-for="row in data" :key="row.id || row.email || row.key">
            <td
              v-for="col in columns"
              :key="col.key"
              class="px-6 py-4"
              :class="col.key === 'name' ? 'font-semibold' : 'text-gray-300'"
            >
              <slot :name="'cell-' + col.key" :value="row[col.key]" :row="row">
                {{ row[col.key] }}
              </slot>
            </td>
            <td v-if="showActions" class="px-6 py-4 text-right">
              <button class="text-indigo-400 hover:text-indigo-300 font-medium" @click="$emit('edit', row)">
                Editar
              </button>
              <button class="text-red-400 hover:text-red-300 font-medium ml-4" @click="$emit('delete', row)">
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>