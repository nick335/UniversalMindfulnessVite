import { getImagePayload } from "../../types/api/images"
import { axiosInstance } from "../instance"


export const getImages = async (payload: getImagePayload) => {
  const response = await axiosInstance.get('images', {
    params: payload 
  },)

  return response
}