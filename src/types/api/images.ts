export type getImagePayload = {
  title: string,
}

export type postImagePayload = {
  title: string,
  images: Blob[]
}

export type deleteImagePayload = {
  id: number
}

export type postVideoPayload = {
  title: string;
  video: Blob;
}