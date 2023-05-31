import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/first",
    component: () => import('@/views/First'),
  }
]

const router = new VueRouter({
  routes
})

export default router
