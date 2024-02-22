export type imageResponseType = {
  id: number
  title: string
  link: string // image href
}

export type testimonialResponseType = {
  id: number,
  title: string, // as testimonial owner name
  body1: string, // as testimony
  header: string // as testimonial caption
  section: string // as section
  link1: string // as image 
}

export type teamResponseType = {
  id: number,
  title: string // as team member name
  header: string // as team member role
  body1: string // as team member short introduction
  link1: string // as team member image
  section: string // as section
}

export type eventResponseType = {
  id: number,
  title: string // as event title
  body1: string // as event body
  link1: string // as image link
}

export type blogResponseType = {
  id: number,
  title: string // as blog title
  header: string // as blog category
  body1: string // as blog content
  body2: string // as blog author
  link1: string // as image link
}