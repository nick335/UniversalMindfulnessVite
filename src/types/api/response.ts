export type imageResponseType = {
  id: number
  title: string
  link: string // image href
  section: string
}
export type videoResponseType = {
  id: number
  title: string
  link: string // image href
  section: string
}

export type testimonialResponseType = {
  id: number,
  title: string, // as testimonial owner name
  body1: string, // as testimony
  header: string // as testimonial caption
  section: string
  link1: string // as image 
}

export type teamResponseType = {
  id: number,
  title: string // as team member name
  header: string // as team member role
  body1: string // as team member short introduction
  section: string
  link1: string // as team member image
}

export type eventResponseType = {
  id: number,
  title: string // as event title
  body1: string // as event body
  section: string
  link1: string // as image link
}

export type blogResponseType = {
  id: number,
  title: string // as blog title
  sub_section: string // as blog category
  body1: string // as blog content
  header: string // as blog author
  section: string
  link1: string // as image link
  created_at?: string // as time when blog was created
}

export type serviceResponseType = {
  id: number,
  title: string // as service title
  body1: string // as service description
  section: string
  link1: string // as image link
}

export type aboutSectionResponseType = {
  id: number
  title: string
  body1: string
  link1:string
  section: string
}

export type whatweofferSectionResponseType = {
  id: number
  title: string
  body1: string
  link1:string
  link2: string
  link3: string,
  body2: string,
  section: string
}

export type subscribersResponseType = {
  body1: string
}