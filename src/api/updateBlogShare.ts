import { patchUpdateBlogShareType } from "../types/api/content"
import { axiosInstance } from "./instance"

// Endpoint is not live yet — callers must treat failures as non-fatal so
// shares keep working while the backend catches up.
export const updateBlogShare = async (payload: patchUpdateBlogShareType) => {
  const response = await axiosInstance.patch('contents/blog-share', payload)

  return response
}
