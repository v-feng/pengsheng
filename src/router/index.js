import { createRouter, createWebHistory } from 'vue-router';
import Layout from '@/layout/index.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'WebHome',
      component: Layout,
      meta: { title: '平台首页' },
      children: [
        { path: '', redirect: 'index', name: '232' },
        {
          path: '/index',
          name: 'index',
          meta: { title: '平台首页' },
          component: () => import('../views/index.vue'),
        },
        {
          path: '/about',
          name: 'about',
          meta: { title: '关于我们' },
          component: () => import('../views/about/index.vue'),
        },
        {
          path: '/service',
          name: 'service',
          meta: { title: '服务流程' },
          component: () => import('../views/service/index.vue'),
        },
        {
          path: '/project',
          name: 'project',
          meta: { title: '历年作品' },
          component: () => import('../views/project/index.vue'),
        },
        {
          path: '/contact',
          name: 'contact',
          meta: { title: '联络我们' },
          component: () => import('../views/contact/index.vue'),
        },
        {
          path: '/detail',
          name: 'detail',
          meta: { title: '详情' },
          component: () => import('../views/detail/index.vue'),
        },
        {
          path: '/media',
          name: 'media',
          meta: { title: '媒体讯息' },
          component: () => import('../views/media/index.vue'),
        },
      ],
    },
  ],
});

export default router;
