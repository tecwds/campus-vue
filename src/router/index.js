import { createRouter, createMemoryHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  //映射关系：path -> component
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("@/views/merchandise_sales/home/home.vue")
    },
    {
      path: "/favor",
      component: () => import("@/views/merchandise_sales/favor/favor.vue")
    },
    {
      path: "/order",
      component: () => import("@/views/merchandise_sales/order/order.vue")
    },
    {
      path: "/message",
      component: () => import("@/views/merchandise_sales/message/message.vue")
    },
  ]
})

export default router
