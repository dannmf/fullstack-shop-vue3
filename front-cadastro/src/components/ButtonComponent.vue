<!-- src/components/base/BaseButton.vue -->
<template>
    <button v-bind="$attrs" :class="['bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700 transition font-semibold', $attrs.class]" :disabled>
        <slot />
    </button>
</template>
