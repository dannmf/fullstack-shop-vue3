<script setup lang="ts">
import { ref } from 'vue';

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<template>
  <nav class="bg-gradient-to-r from-teal-600 to-teal-800 shadow-lg">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <!-- Logo e título -->
        <div class="flex items-center">
          <div class="flex-shrink-0 flex items-center">
            <!-- Ícone (você pode substituir por seu logo) -->
            <svg class="h-8 w-8 text-teal-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <span class="ml-2 text-xl font-bold text-white">FullStack Shop</span>
          </div>
        </div>

        <!-- Links de navegação para desktop -->
        <div class="hidden sm:flex sm:items-center">
          <div class="ml-10 flex items-baseline space-x-4">
            <RouterLink to="/" 
              class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-teal-500 hover:text-white transition-colors duration-200"
              :class="{ 'bg-teal-500': $route.path === '/' }">
              Dashboard
            </RouterLink>
            <RouterLink to="/users" 
              class="px-3 py-2 rounded-md text-sm font-medium text-teal-100 hover:bg-teal-500 hover:text-white transition-colors duration-200"
              :class="{ 'bg-teal-500': $route.path === '/users' }">
              Usuários
            </RouterLink>
            <RouterLink to="/products" 
              class="px-3 py-2 rounded-md text-sm font-medium text-teal-100 hover:bg-teal-500 hover:text-white transition-colors duration-200"
              :class="{ 'bg-teal-500': $route.path === '/products' }">
              Produtos
            </RouterLink>
            <RouterLink to="/categories" 
              class="px-3 py-2 rounded-md text-sm font-medium text-teal-100 hover:bg-teal-500 hover:text-white transition-colors duration-200"
              :class="{ 'bg-teal-500': $route.path === '/categories' }">
              Categorias
            </RouterLink>
          </div>
        </div>

        <!-- Botão do menu mobile -->
        <div class="flex items-center sm:hidden">
          <button @click="toggleMobileMenu" type="button" 
            class="inline-flex items-center justify-center p-2 rounded-md text-teal-100 hover:text-white hover:bg-teal-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
            aria-controls="mobile-menu" :aria-expanded="isMobileMenuOpen">
            <span class="sr-only">Abrir menu principal</span>
            <!-- Ícone quando fechado -->
            <svg v-if="!isMobileMenuOpen" class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <!-- Ícone quando aberto -->
            <svg v-else class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Menu mobile -->
    <div v-show="isMobileMenuOpen" class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <RouterLink to="/" 
          class="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-teal-500 hover:text-white transition-colors duration-200"
          :class="{ 'bg-teal-500': $route.path === '/' }">
          Home
        </RouterLink>
        <RouterLink to="/users" 
          class="block px-3 py-2 rounded-md text-base font-medium text-teal-100 hover:bg-teal-500 hover:text-white transition-colors duration-200"
          :class="{ 'bg-teal-500': $route.path === '/users' }">
          Usuários
        </RouterLink>
        <RouterLink to="/products" 
          class="block px-3 py-2 rounded-md text-base font-medium text-teal-100 hover:bg-teal-500 hover:text-white transition-colors duration-200"
          :class="{ 'bg-teal-500': $route.path === '/products' }">
          Produtos
        </RouterLink>
        <RouterLink to="/categories" 
          class="block px-3 py-2 rounded-md text-base font-medium text-teal-100 hover:bg-teal-500 hover:text-white transition-colors duration-200"
          :class="{ 'bg-teal-500': $route.path === '/categories' }">
          Categorias
        </RouterLink>
      </div>
    </div>
  </nav>
</template>