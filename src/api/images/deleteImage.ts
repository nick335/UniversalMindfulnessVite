import { deleteImagePayload } from "../../types/api/images";
import { axiosInstance2 } from "../instance";


export const deleteImage = async (payload: deleteImagePayload) => {
  const response = await axiosInstance2.delete('images', {
    params: payload
  })

  return response
}