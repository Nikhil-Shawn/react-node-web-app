import axios from "axios";

const BASE_URL = "http://localhost:5000/api/v1";
const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken;  // Replace with the actual token when available

console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.accessToken)

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
