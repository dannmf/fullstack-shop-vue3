<!-- src/components/base/BaseInput.vue -->


<script setup lang="ts">
defineProps<{
    modelValue: string | number,
    label?: string,
    type?: string
}>()
</script>

<template>
    <label v-if="label" class="block mb-2 text-sm font-medium text-gray-900">{{ label }}</label>
    <input :type="type" v-bind="$attrs" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
        class="border border-gray-300 p-2 rounded w-full mb-5" />
</template>
