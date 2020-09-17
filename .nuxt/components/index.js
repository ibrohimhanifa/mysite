export { default as Card } from '../..\\components\\card.vue'
export { default as NavBar } from '../..\\components\\NavBar.vue'

export const LazyCard = import('../..\\components\\card.vue' /* webpackChunkName: "components_card" */).then(c => c.default || c)
export const LazyNavBar = import('../..\\components\\NavBar.vue' /* webpackChunkName: "components_NavBar" */).then(c => c.default || c)
