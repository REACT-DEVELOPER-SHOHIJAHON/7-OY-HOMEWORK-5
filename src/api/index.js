import axios from "axios";
import { store } from "../store/store";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/",
    headers: {
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

export default instance