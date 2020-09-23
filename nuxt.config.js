export default {
    mode: 'universal',
    target: 'server',
    head: {
        title: 'Richard Catty - Writer',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            {
                hid: 'description',
                name: 'description',
                content: process.env.npm_package_description || '',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/catman.png' },
            {
                rel: 'stylesheet',
                href:
                    'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
            },
            {
                rel: 'stylesheet',
                href:
                    'https://fonts.googleapis.com/css2?family=Roboto&display=swap',
            },
        ],
    },
    css: ['~assets/styles/main.css', { src: 'bulma/bulma.sass', lang: 'sass' }],
    plugins: [],
    components: true,
    buildModules: ['@nuxtjs/style-resources', '@nuxtjs/eslint-module'],
    styleResources: {
        scss: ['~assets/scss/main.scss'],
    },
    modules: ['@nuxtjs/axios'],
    axios: {},
    build: {},
    env: {},
    transition: {
        name: 'fade',
        mode: 'out-in',
    },
}
