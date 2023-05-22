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
    component: () => import('@/views/home/home.vue'),
    name: 'root'
  },
  {
    path: '/login',
    component: () => import('@/views/login/login.vue'),
    name: 'login'
  },
  {
    path: '/404',
    component: () => import('@/views/404/404.vue'),
    name: '404'
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/404/404.vue'),
    name: 'not-found',
    redirect: '/404'
  }
]
