export { default as Hero } from '../..\\components\\index\\Hero.vue'
export { default as ProfileNav } from '../..\\components\\profile\\ProfileNav.vue'
export { default as ProfileTimeline } from '../..\\components\\profile\\ProfileTimeline.vue'

export const LazyHero = import('../..\\components\\index\\Hero.vue' /* webpackChunkName: "components_index/Hero" */).then(c => c.default || c)
export const LazyProfileNav = import('../..\\components\\profile\\ProfileNav.vue' /* webpackChunkName: "components_profile/ProfileNav" */).then(c => c.default || c)
export const LazyProfileTimeline = import('../..\\components\\profile\\ProfileTimeline.vue' /* webpackChunkName: "components_profile/ProfileTimeline" */).then(c => c.default || c)
