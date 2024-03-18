import fs from 'fs'
import {createClient} from '@sanity/client'

export default defineNuxtConfig({
    devServer: process.env.TLS === 'y' ? {
        https: {
            cert: fs.readFileSync(process.env.TLS_CERT_FILE ?? '').toString(),
            key: fs.readFileSync(process.env.TLS_KEY_FILE ?? '').toString(),
        }
    }: {},

    devtools: {
        enabled: false
    },

    modules: [
        '@nuxtjs/sitemap',
        '@nuxtjs/tailwindcss',
        ['@nuxtjs/sanity', {
            projectId: process.env.SANITY_PROJECT_ID,
            dataset: process.env.SANITY_PROJECT_DATASET,
            useCdn: process.env.SANITY_API_CDN === 'y'
        }],
        '@on-247/nuxt-util'
    ],

    app: {
        head: {
            link: [
                {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'},
                // {rel: 'icon', type: 'image/png', href: '/favicon.png'},
                {rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png'},
            ]
        }
    },

    css: [
        '~/assets/css/app.scss'
    ],

    sitemap: {
        /**
         * Since we could not rely on auto-import behaviour here, every logic
         * concerned of generating the sitemap is concentrated solely in this function.
         */
        urls: async () => {
            const client = createClient({
                projectId: process.env.SANITY_PROJECT_ID,
                dataset: process.env.SANITY_PROJECT_DATASET,
                useCdn: false
            })
            const SITEMAP_QUERY = `*[(_type == 'page' || _type == 'product') && !('draft' in _id)]{
                (_type == 'page') => {"url":"/" + slug.current}
            }`
            const pages = await client.fetch<{url: string}[]>(SITEMAP_QUERY)
            return pages.length ? pages.map(page => page.url) : []
        }
    }
})