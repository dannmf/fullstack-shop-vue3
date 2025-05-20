<!-- src/views/dashboard/Dashboard.vue -->
<script setup lang="ts">
import Navbar from '../../components/NavBar.vue'
</script>

<template>

  <div class="min-h-screen  dark:bg-gray-800 dark:border-gray-700">

    <Navbar />
    <router-view />
  </div>
</template>
