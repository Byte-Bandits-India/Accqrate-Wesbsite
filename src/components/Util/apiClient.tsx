"use client";
import axios from "axios";

// ✅ API base URL
const API_URL =
    process.env.NEXT_PUBLIC_API_URL ||
    (process.env.NODE_ENV === "production"
        ? "https://prod.accqrate-erp.com/api"
        : "http://localhost:9020/api");

const apiClient = axios.create({
    baseURL: `${API_URL}/`,
});

apiClient.interceptors.request.use((config) => {
    const token = typeof window !== 'undefined' ? localStorage.getItem("ACCOUNTING_USER") : null;

    if (token) {
        config.headers = config.headers || {};
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
);

export default apiClient;