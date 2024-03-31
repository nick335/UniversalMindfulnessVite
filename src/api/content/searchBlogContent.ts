import { searchPayloadType } from '../../types/api/content';
import { axiosInstance } from './../instance';



export const searchBlogContent = async (payload: searchPayloadType) => {
  const response = axiosInstance.get('search', {
    params: payload
  })

  return response
}