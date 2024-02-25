import { editContentPayloadType } from "../../types/api/content"
import createContentFormDataFromPayload from "../../utilsFunction/CreateContentFormDataFromPayload"
import { axiosInstance2 } from "../instance"

export const editContent = async (payload: editContentPayloadType) => {
  
  const formData = createContentFormDataFromPayload(payload.payload)
  const response = await axiosInstance2.post(`contents/${payload.id}`, formData)

  return response
}