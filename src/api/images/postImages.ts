import { postImagePayload } from "../../types/api/images";
import {  axiosInstance2 } from "../instance"



export const postImages = async (payload: postImagePayload) => {
  const formData = new FormData();
  payload.images.forEach((file, index) => {
    formData.append(`images[${index}]`, file);
  })
  formData.append('title', payload.title)
  const response = await axiosInstance2.post('images', formData)

  return response;
}