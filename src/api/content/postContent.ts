import { axiosInstance2 } from "../instance";



export const postContent = async () => {
  const formData = new FormData();

  const response = await axiosInstance2.post('images', formData)

  return response;
}