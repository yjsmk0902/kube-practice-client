export interface HealthCheckResponse {
    status?: string;
    timestamp?: string;
    version?: string;
    [key: string]: any;
}

export const useApi = () => {
    const config = useRuntimeConfig();
    const baseUrl = config.public.apiBaseUrl;

    /**
     * 헬스 체크 API를 호출하는 함수
     * @returns {Promise<HealthCheckResponse>} API 응답 객체
     */
    const callHealthCheckApi = async (): Promise<HealthCheckResponse> => {
        try {
            const url = `${baseUrl}/health-check`;
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error(`Health check failed with status: ${response.status}`);
            }

            return await response.json() as HealthCheckResponse;
        } catch (error) {
            console.error('Health check API error:', error instanceof Error ? error.message : String(error));
            throw error;
        }
    };

    return {
        callHealthCheckApi,
    };
};