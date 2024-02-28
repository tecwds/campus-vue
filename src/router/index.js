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
      component: () => import("@/views/first/home/f_home.vue"),
      meta: {
        hideMtabbar: true
      }
    },
    {
      path: "/community",
      component: () => import("@/views/first/community/community.vue"),

    },
    {
      path: "/individual",
      component: () => import("@/views/first/individual/individual.vue"),
    },
    


    {
      path: "/m_home",
      component: () => import("@/views/merchandise_sales/home/m_home.vue"),
      meta: {
        hideFtabbar: true
      }
    },
    {
      path: "/m_favor",
      component: () => import("@/views/merchandise_sales/favor/m_favor.vue"),
    },
    {
      path: "/m_order",
      component: () => import("@/views/merchandise_sales/order/m_order.vue"),
    },
    {
      path: "/m_message",
       component: () => import("@/views/merchandise_sales/message/m_message.vue"),
    }

  ]
})

export default router

