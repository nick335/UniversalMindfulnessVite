import {  getContentByIdPayloadType } from "../../types/api/content"
import { axiosInstance } from "../instance"


export const getContentById = async (payload: getContentByIdPayloadType) => {
  const response = await axiosInstance.get('contents', {
    params: payload
  })

  return response
}