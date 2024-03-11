import { axiosInstance } from "../instance"



export const getMostPopularBlogs = async () => {
  const response = await axiosInstance.get('contents', {
    params: {
      popularBlog: '1'
    }
  })

  return response;
}