
<script setup lang="ts">
// Nada necessário aqui por enquanto
</script>



<template>
  <nav class="bg-teal-700 text-white p-4 flex justify-between items-center">
    <div class="text-lg font-bold">Dashboard</div>

    <ul class="flex gap-4">
      <li>
        <RouterLink to="/users" class="hover:underline" active-class="underline">Usuários</RouterLink>
      </li>
       <li>
        <RouterLink to="products" class="hover:underline" active-class="underline">Produtos</RouterLink>
      </li>
      <li>
        <RouterLink to="/about" class="hover:underline" active-class="underline">Categorias</RouterLink>
      </li>
    </ul>
  </nav>
</template>
