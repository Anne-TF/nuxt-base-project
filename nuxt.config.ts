// https://nuxt.com/docs/api/configuration/nuxt-config
import vuetify from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass', '@/assets/css/app.scss'],
    build: {
        transpile: ['vuetify']
    },
    runtimeConfig: {
        public: {
            server: {
                protocol: process.env.API_PROTOCOL || 'http',
                hostname: process.env.API_HOSTNAME || 'localhost',
                basePath: process.env.BASE_PATH || '/api',
                port: process.env.API_PORT || null,
                baseUrl: `${process.env.API_PROTOCOL}://${process.env.API_HOSTNAME}${process.env.API_PORT ? `:${process.env.API_PORT}` : ''}${process.env.BASE_PATH}`,
                withCredentials: process.env.API_WITH_CREDENTIALS
            }
        }
    },
    vite: {
        define: {
            'process.env.DEBUG': false
        }
    },
    modules: [
        async(options, nuxt) =>
        {
            await nuxt.hooks.hook('vite:extendConfig', config =>
            // @ts-ignore
                config.plugins.push(vuetify())
            );
        }
    ],
    devtools: { enabled: true }
});
