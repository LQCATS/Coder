import { createRouter, createWebHistory } from 'vue-router'
import CouponList from '../views/CouponList.vue'
const routes = [
    {
        path: '/list',
        component: CouponList
    }
]
const router = createRouter({
    routes,
    history: createWebHistory('/vue3')
})
export default router;