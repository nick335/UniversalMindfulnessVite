import { adminLogin } from "../types/login"
import { axiosInstance } from "./instance"

export const Login = async (payload: adminLogin) => {
  const response = await axiosInstance.post('login', payload)

  return response
}