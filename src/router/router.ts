// 常量路由
interface RouteRecordRaw {
  path: string,
  component?: () => Promise<any>,
  name: string,
  redirect?: string
}

export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/home/index.vue'),
    name: 'root'
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'login'
  },
  {
    path: '/404',
    component: () => import('@/views/404/index.vue'),
    name: '404'
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404/index.vue'),
    name: 'not-found',
    redirect: '/404'
  }
]
