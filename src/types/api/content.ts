

export type postContentPayloadType = {
  section: string,
  header?: string,
  title?: string,
  body1?: string,
  body2?: string,
  image1?: Blob
  image2?: Blob
  image3?: Blob
  sub_section?: string
}

export type editContentPayloadType = {
  id: string
  payload: postContentPayloadType
}

export type getContentPayloadType = {
  section: string,
  sub_section?: string,
  page?: number
}

export type deleteContentPayloadType = {
  id: number
}