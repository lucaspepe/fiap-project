import ListTarefas from '@/components/ListTarefas.vue'
import Login from '@/components/Login.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: ListTarefas, meta: { requiresAuth: true } },
    { path: '/login', component: Login },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      const token = localStorage.getItem('token');
      if (token) {
        next();
      } else {
        next('/login');
      }
    } else {
      next();
    }
  });

export default router
