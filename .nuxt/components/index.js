export { default as Hero } from '../..\\components\\index\\Hero.vue'
export { default as ProfileIndex } from '../..\\components\\profile\\ProfileIndex.vue'
export { default as ProfileNav } from '../..\\components\\profile\\ProfileNav.vue'

export const LazyHero = import('../..\\components\\index\\Hero.vue' /* webpackChunkName: "components_index/Hero" */).then(c => c.default || c)
export const LazyProfileIndex = import('../..\\components\\profile\\ProfileIndex.vue' /* webpackChunkName: "components_profile/ProfileIndex" */).then(c => c.default || c)
export const LazyProfileNav = import('../..\\components\\profile\\ProfileNav.vue' /* webpackChunkName: "components_profile/ProfileNav" */).then(c => c.default || c)
