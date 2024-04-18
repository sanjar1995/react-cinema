import axios from "axios";
import { useState } from "react";
const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  params: {language: 'ru-RU'},
  headers: {
    accept: "application/json",
    Authorization:`Bearer ${import.meta.env.VITE_TOKEN}`,
  },
});
export const useAxiosInterceptor =()=>{
    const [loading, setloading] = useState(false)
    api.interceptors.request.use(
        (config)=>{
            setloading(true)
            return config
        },
        (error)=>{
            setloading(false)
            return Promise.reject(error)
        }
    )
    api.interceptors.response.use(
        (response)=>{
            setloading(false)
            return response
        },
        (error)=>{
            setloading(false)
            return Promise.reject(error)
        }
    )
    return {loading}
}
export default api