import {process} from "std-env";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: true},
    app: {
        baseURL: "/main"
    },
    nitro: {
      routeRules: {
        '/api/**': {
          proxy: 'http://ing-default-kubeprivatei-95da4-104258556-e369bd066aff.kr.lb.naverncp.com/main-api/**'
        }
      }
    },
    runtimeConfig: {
        public: {
            apiBaseUrl: '/api',
        }
    }
})
