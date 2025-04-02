<template>
  <div class="container mx-auto p-4">
    <h1 class="text-2xl font-bold mb-4">메인 페이지</h1>

    <button
        @click="checkHealth"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
      서버 상태 확인
    </button>

    <div v-if="healthStatus" class="mt-4 p-4 bg-green-100 rounded">
      <h2 class="font-bold mb-2">서버 상태:</h2>
      <pre class="bg-gray-100 p-2 rounded">{{ JSON.stringify(healthStatus, null, 2) }}</pre>
    </div>

    <div v-if="error" class="mt-4 p-4 bg-red-100 text-red-700 rounded">
      <h2 class="font-bold mb-2">오류:</h2>
      <p>{{ error }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import {type HealthCheckResponse, useApi} from '@/composables/useApi';
const { callHealthCheckApi } = useApi();
const healthStatus = ref<HealthCheckResponse | null>(null);
const error = ref<string | null>(null);

const checkHealth = async (): Promise<void> => {
  try {
    healthStatus.value = await callHealthCheckApi();
    console.log(healthStatus.value);
    error.value = null;
  } catch (err) {
    error.value = err instanceof Error ? err.message : String(err);
    healthStatus.value = null;
  }
};
</script>