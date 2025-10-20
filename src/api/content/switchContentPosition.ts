import { axiosInstance2 } from "../instance"


export interface switchContentPosition {
  ids: number[]
}

export const switchContentPosition = async ({ids}: switchContentPosition) => {
  const response = await axiosInstance2.post('switch-content-ids', {ids})

  return response
}