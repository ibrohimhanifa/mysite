export { default as Card } from '../..\\components\\Card.vue'
export { default as Hero } from '../..\\components\\Hero.vue'
export { default as Menu } from '../..\\components\\Menu.vue'
export { default as NavBar } from '../..\\components\\NavBar.vue'
export { default as ProfileSideNav } from '../..\\components\\profile\\ProfileSideNav.vue'
export { default as Timeline } from '../..\\components\\profile\\Timeline.vue'

export const LazyCard = import('../..\\components\\Card.vue' /* webpackChunkName: "components_Card" */).then(c => c.default || c)
export const LazyHero = import('../..\\components\\Hero.vue' /* webpackChunkName: "components_Hero" */).then(c => c.default || c)
export const LazyMenu = import('../..\\components\\Menu.vue' /* webpackChunkName: "components_Menu" */).then(c => c.default || c)
export const LazyNavBar = import('../..\\components\\NavBar.vue' /* webpackChunkName: "components_NavBar" */).then(c => c.default || c)
export const LazyProfileSideNav = import('../..\\components\\profile\\ProfileSideNav.vue' /* webpackChunkName: "components_profile/ProfileSideNav" */).then(c => c.default || c)
export const LazyTimeline = import('../..\\components\\profile\\Timeline.vue' /* webpackChunkName: "components_profile/Timeline" */).then(c => c.default || c)
