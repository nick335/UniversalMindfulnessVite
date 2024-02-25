import { postContentPayloadType } from "../../types/api/content";
import createContentFormDataFromPayload from "../../utilsFunction/CreateContentFormDataFromPayload";
import { axiosInstance2 } from "../instance";



export const postContent = async (payload: postContentPayloadType) => {
  const formData: FormData =createContentFormDataFromPayload(payload)
  const response = await axiosInstance2.post('contents', formData)

  return response;
}