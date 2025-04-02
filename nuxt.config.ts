import {process} from "std-env";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    // 클라이언트에서도 접근 가능한 공개 키
    public: {
      apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:8080'
    }
  }
})
