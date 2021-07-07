import axios from 'axios';

export const api = axios.create({
    baseURL: "https://dashgo-two.vercel.app/api/"
})