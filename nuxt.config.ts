// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  components: [
    {
      path: "~/components/",
    },
  ],
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/scss/style.scss",
  ],
  build: {
    transpile: ["vuetify"],
  },
  vite: {
    define: {
      "process.env.DEBUG": false,
    },
  },
  runtimeConfig: {
    // The private keys which are only available within server-side
    apiSecret: "123",
    // Keys within public, will be also exposed to the client-side
    public: {
      apiBaseUrl: "/",
    },
    customVariables: "../scss/variables.scss",
  },
});
