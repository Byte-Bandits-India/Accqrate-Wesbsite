"use client";
import axios, { AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from "axios";

const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV === "production"
        ? "https://prod.accqrate-erp.com/api"
        : "http://localhost:9020/api");

const apiClient = axios.create({
    baseURL: `${API_URL}/`,
});

// 👇 FIXED interceptor typing
apiClient.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    const token = localStorage.getItem("ACCOUNTING_USER");

    if (token) {
        // ✅ ensure headers object exists
        config.headers = config.headers ?? {};
        config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
});

apiClient.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error) => Promise.reject(error)
);

export default apiClient;