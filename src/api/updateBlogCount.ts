import { patchUpdateBlogCountType } from "../types/api/content"
import { axiosInstance } from "./instance"


export const updateBlogCount = async (payload: patchUpdateBlogCountType) => {
  const response = await axiosInstance.patch('contents/blog-count', payload )

  return response
}