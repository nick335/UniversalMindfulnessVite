import { postSubscribeToNewsletter } from "../types/api/content";
import { axiosInstance } from "./instance";

export const subscribeToNewsletter = async (body: postSubscribeToNewsletter) => {
  const response = await axiosInstance.post("/subscribe", body)

  return response;
};