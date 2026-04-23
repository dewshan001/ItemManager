import axios from "axios";

const envBaseUrl = (import.meta.env.VITE_API_URL || "http://localhost:5001")
    .trim()
    .replace(/\/+$/, "");

const normalizedBaseUrl = envBaseUrl.endsWith("/api")
    ? envBaseUrl
    : `${envBaseUrl}/api`;

const API = axios.create({
    baseURL: normalizedBaseUrl
});

export const getItems = () => API.get("/items");
export const createItem = (data) => API.post("/items", data);
export const updateItem = (id, data) => API.put(`/items/${id}`, data);
export const deleteItem = (id) => API.delete(`/items/${id}`);
