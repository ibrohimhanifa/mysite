import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _250976a1 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _70db8330 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _3a5044a2 = () => interopDefault(import('..\\pages\\profile\\project.vue' /* webpackChunkName: "pages/profile/project" */))
const _334af56b = () => interopDefault(import('..\\pages\\profile\\work.vue' /* webpackChunkName: "pages/profile/work" */))
const _59e7bc7a = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/blog",
    component: _250976a1,
    name: "blog"
  }, {
    path: "/profile",
    component: _70db8330,
    name: "profile"
  }, {
    path: "/profile/project",
    component: _3a5044a2,
    name: "profile-project"
  }, {
    path: "/profile/work",
    component: _334af56b,
    name: "profile-work"
  }, {
    path: "/",
    component: _59e7bc7a,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
