import axios from "axios"

export const axiosInstance = axios.create({
   baseURL: "https://ssegiblog.herokuapp.com/api/" 
})