export default {

    buildModules: ['@nuxtjs/tailwindcss'],
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {}
    },
    css: [
        '~/assets/css/style.css'
    ],
    components: true,
    pageTtransition: 'default'
}