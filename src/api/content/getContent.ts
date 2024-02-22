import { getContentPayloadType } from "../../types/api/content";
import { axiosInstance,} from "../instance"; 


export const getContent = async (payload: getContentPayloadType ) => {
  const response = await axiosInstance.get('contents', {
    params: payload
  })
  return response
}