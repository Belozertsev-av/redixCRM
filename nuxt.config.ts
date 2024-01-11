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
        { rel: 'icon', href: '/redix_logo.png', type: 'image/png' }
      ]
    }
  },
  css: ["~/assets/scss/main.scss"]
})