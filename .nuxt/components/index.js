export { default as Card } from '../..\\components\\Card.vue'
export { default as Menu } from '../..\\components\\Menu.vue'
export { default as NavBar } from '../..\\components\\NavBar.vue'

export const LazyCard = import('../..\\components\\Card.vue' /* webpackChunkName: "components_Card" */).then(c => c.default || c)
export const LazyMenu = import('../..\\components\\Menu.vue' /* webpackChunkName: "components_Menu" */).then(c => c.default || c)
export const LazyNavBar = import('../..\\components\\NavBar.vue' /* webpackChunkName: "components_NavBar" */).then(c => c.default || c)
