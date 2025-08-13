import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/components/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      {
        path: 'about',
        component: () => import('@/views/about/index.vue'),
      },
    ],
  },
  {
    path: '/manage',
    component: () => import('@/components/layout-manage/index.vue'),
    children: [
      {
        path: 'home',
        component: () => import('@/views/manage/home/index.vue'),
      },
      {
        path: 'about',
        component: () => import('@/views/manage/about/index.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
