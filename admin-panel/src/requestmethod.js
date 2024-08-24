import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";
const TOKEN = "";  // Replace with the actual token when available

// Public requests do not require authentication
export const publicRequest = axios.create({
    baseURL: BASE_URL
});

// User requests require authentication
export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${TOKEN}`,
    },
});
