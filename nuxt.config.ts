import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "~/assets/scss/_variables.scss" as *;`
        }
      }
    }
  },
  app: {
    head: {
      title: "Redix CRM. test pages",
      meta: [
        {
          name: 'description', content: 'Test page'
        }
      ],
      link: [
        { rel: 'icon', href: '/redix_logo.png', type: 'image/png' }, 
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' }, 
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' }, 
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&display=swap' }
      ]
    }
  },
  css: ["~/assets/scss/main.scss"]
})