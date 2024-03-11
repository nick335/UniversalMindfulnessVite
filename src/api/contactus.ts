import { postContactusPayload } from '../types/api/content';
import { axiosInstance } from './instance';


export const contactus = async (body: postContactusPayload) => {
  const response = await axiosInstance.post('contact', body)
  return response
}