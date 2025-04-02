import {process} from "std-env";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  app: {
    baseURL: "/main"
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: 'http://kube-test-server-main',
    }
  }
})
