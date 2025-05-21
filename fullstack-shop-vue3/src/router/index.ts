import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '../stores/auth'

const routes = [
    { path: '/login', component: () => import('@/views/auth/Login.vue') },
    {
        path: '/',
        component: () => import('@/views/dashboard/Dashboard.vue'),
        meta: { requiresAuth: true },
        children: [ 
            { path: 'products', component: () => import('@/views/modules/Products.vue') },
            // { path: 'products', component: () => import('../views/Home.vue') },
            // { path: 'categories', component: () => import('../views/Home.vue') },
            { path: '/:pathMatch(.*)*', redirect: '/' }

        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const auth = useAuthStore()
    if (to.meta.requiresAuth && !auth.token) {
        next({ path: '/login' })
    } else {
        next()
    }
})

export default router