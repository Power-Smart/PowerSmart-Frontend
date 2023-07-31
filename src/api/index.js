import axios from "axios";

const URL = `${import.meta.env.VITE_APP_API_URL}:${
    import.meta.env.VITE_APP_API_PORT
}`;

export default api = axios.create({
    baseURL: URL,
}); // Create an axios instance

api.interceptors.request.use((response) => {
    const token = localStorage.getItem("token");
    if (token) {
        response.headers.Authorization = `Bearer ${token}`;
    }
    return response;
}); // Request interceptor
