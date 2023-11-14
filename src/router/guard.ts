import type { Router } from 'vue-router'
import NProgress from '@/utils/nprogress'

const whiteList = ['/login']

export function createRouterGuard(router: Router) {
  router.beforeEach(async (to, from, next) => {
    NProgress.start()
    if (to.path === '/login') {
      //TODO 判断是否登录有token
      //有token return next(from.fullPath)
      return next()
    }
    // 白名单放行
    if (whiteList.includes(to.path)) return next()
    // token不存在 跳转登录
    //if(!token) return next({path:'/login',query:{redirect: to.fullPath}})

    // 未初始化路由
    // if(!routeStore.isInitRoute){
    // routeStore.initRoute();
    // return next({ path: to.fullPath, replace: true, query: to.query, hash: to.hash })
    //}
  })

  router.afterEach(() => {
    NProgress.done()
  })
}
