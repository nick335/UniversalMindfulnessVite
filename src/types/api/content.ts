

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

export type getContentPayloadType = {
  section: string,
  sub_section?: string,
}

export type deleteContentPayloadType = {
  id: number
}