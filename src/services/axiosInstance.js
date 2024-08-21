import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://d36ccb0d7d479cc3.mokky.dev",
    headers: {
        "Content-Type": "application/json",
    }
});