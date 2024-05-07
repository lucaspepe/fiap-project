import ListTarefas from '@/components/ListTarefas.vue'
import Login from '@/components/Login.vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const routes = [
    { path: '/', component: Login },
    { path: '/tarefas', component: ListTarefas },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
