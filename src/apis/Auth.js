import axios from "axios";
import { BASE_URL } from "../constants/constant";

export const transport = axios.create({
    baseURL: BASE_URL,
    timeout: 5000000,
    headers: {
        "Content-Type": "application/json",
    },
});
