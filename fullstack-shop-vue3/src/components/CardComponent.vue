<script setup lang="ts">
const props = defineProps<{
    title: string,
    count: number | null,
    icon: string,
    onClick?: () => void
}>()

const handleClick = () => {
    if (props.onClick) {
        props.onClick()
    }
}


</script>

<template>
    <div @click="handleClick" @keydown.enter="handleClick" tabindex="0"
        class="bg-white dark:bg-gray-700 p-6 m-6 rounded-2xl shadow-lg flex items-center justify-between min-w-[300px] min-h-[120px]  transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer">
        <!-- Ícone -->


        <!-- Texto -->
        <div class="text-left">
            <p class="text-gray-600 dark:text-gray-300 text-xl font-medium">
                {{ props.title }}
            </p>
            <p class="text-xl font-semibold text-gray-900 dark:text-white">
                Quantidade: {{ props.count }}
            </p>
        </div>

        <div class="text-5xl text-indigo-500">
            {{ props.icon }}
        </div>
    </div>
</template>
