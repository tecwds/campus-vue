import { createRouter, createMemoryHistory, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  //映射关系：path -> component




  routes: [
    {
      path: "/first",
      component: () => import("@/views/first/index.vue"),
      children: [
        {
          path: "home",
          component: () => import("@/views/first/home/f_home.vue"),
          // meta: {
          //   hideMtabbar: true
          // }
        },
        {
          path: "community",
          component: () => import("@/views/first/community/community.vue"),

        },
        {
          path: "individual",
          component: () => import("@/views/first/individual/individual.vue"),
        },

      ]
    },
    {
      path: "/",
      redirect: "/first/home"
    },
    {
      path: "/merchandise",
      component:()=>import("@/views/merchandise_sales/index.vue"),
      children: [
        {
          path: "m_home",
          component: () => import("@/views/merchandise_sales/home/m_home.vue"),
        
        },
        {
          path: "m_favor",
          component: () => import("@/views/merchandise_sales/favor/m_favor.vue"),
        },
        {
          path: "m_order",
          component: () => import("@/views/merchandise_sales/order/m_order.vue"),
        },
        {
          path: "m_message",
          component: () => import("@/views/merchandise_sales/message/m_message.vue"),
        }
      ]
    }




  ]



})

export default router

