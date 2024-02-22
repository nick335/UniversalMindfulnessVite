import { deleteContentPayloadType } from "../../types/api/content"
import { axiosInstance2 } from "../instance"



export const deleteContent = async (payload: deleteContentPayloadType) => {
  const response = await axiosInstance2.delete('contents', {
    params: payload
  })
  return response
}