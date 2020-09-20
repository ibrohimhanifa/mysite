import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _250976a1 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _149b517e = () => interopDefault(import('..\\pages\\home.vue' /* webpackChunkName: "pages/home" */))
const _70db8330 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _cba40cca = () => interopDefault(import('..\\pages\\profile\\timeline.vue' /* webpackChunkName: "pages/profile/timeline" */))
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
    path: "/home",
    component: _149b517e,
    name: "home"
  }, {
    path: "/profile",
    component: _70db8330,
    name: "profile"
  }, {
    path: "/profile/timeline",
    component: _cba40cca,
    name: "profile-timeline"
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
