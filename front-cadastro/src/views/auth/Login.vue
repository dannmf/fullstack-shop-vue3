<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '../../stores/auth'
import BaseInput from '../../components/InputComponent.vue'
import BaseButton from '../../components/ButtonComponent.vue'


const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const errorMessage = ref('')
const router = useRouter()

const handleLogin = async () => {
    try {
        await authStore.login(email.value, password.value)
        router.push('/')
    } catch (error) {
        errorMessage.value = 'E-mail ou senha inválidos'
    }
}
</script>

<template>
    <div
        class="min-h-screen flex items-center justify-center p-4 shadow-sm sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
        <form @submit.prevent="handleLogin" class="w-full max-w-sm bg-white p-6 rounded shadow">
            <h2 class="mb-3 flex items-center justify-center text-2xl font-bold">Login</h2>
            <h2 class="mb-4 flex items-center justify-center  font-bold">Seja Bem-Vindo</h2>
            <BaseInput v-model="email" placeholder="Email" label="E-mail" />
            <BaseInput v-model="password" type="password" placeholder="Senha" label="Senha" />
            <span v-if="errorMessage" class="text-red-500 text-sm mb-4 flex  items-center justify-center">{{
                errorMessage }}</span>
            <BaseButton class=" w-full flex items-center justify-center">Entrar</BaseButton>
        </form>
    </div>

</template>

<style scoped lang="scss"></style>