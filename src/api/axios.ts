import axios from "axios"
export const clientAPI = axios.create({
    baseURL: `http://localhost:3001/`,
    // baseURL: `http://localhost:3001/`,
    headers: {
        Accept: 'application/json',
    },
    responseType: 'json',
})