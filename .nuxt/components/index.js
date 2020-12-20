export { default as BlogHome } from '../..\\components\\blog\\BlogHome.vue'
export { default as Hero } from '../..\\components\\index\\Hero.vue'
export { default as ProfileTemplate } from '../..\\components\\other\\profile_template.vue'
export { default as ProfileMenu } from '../..\\components\\profile\\ProfileMenu.vue'
export { default as ProfileNav } from '../..\\components\\profile\\ProfileNav.vue'

export const LazyBlogHome = import('../..\\components\\blog\\BlogHome.vue' /* webpackChunkName: "components_blog/BlogHome" */).then(c => c.default || c)
export const LazyHero = import('../..\\components\\index\\Hero.vue' /* webpackChunkName: "components_index/Hero" */).then(c => c.default || c)
export const LazyProfileTemplate = import('../..\\components\\other\\profile_template.vue' /* webpackChunkName: "components_other/profile_template" */).then(c => c.default || c)
export const LazyProfileMenu = import('../..\\components\\profile\\ProfileMenu.vue' /* webpackChunkName: "components_profile/ProfileMenu" */).then(c => c.default || c)
export const LazyProfileNav = import('../..\\components\\profile\\ProfileNav.vue' /* webpackChunkName: "components_profile/ProfileNav" */).then(c => c.default || c)
