
import { postVideoPayload } from "../../types/api/images";
import { axiosInstance2 } from "../instance";


export const postVideos = async (payload: postVideoPayload ) => {
  const formData = new FormData();
  formData.append('title', payload.title)
  formData.append(`images[0]`, payload.video)
  formData.append(`images[1]`, payload.video)
  console.log('Sending FormData:', formData);

  console.log({
    payload
  })

  const response = await axiosInstance2.post('images', formData)

  return response
}
