export type getImagePayload = {
  section: string,
}

export type postImagePayload = {
  title: string,
  images: Blob[]
}

export type deleteImagePayload = {
  id: number
}