import { blogResponseType } from "../types/api/response";

// The backend does not return `count` yet — deterministic sample values stand in
// so the design can be reviewed. Remove sampleClicks once the field ships.
const sampleClicks = (id: number) => ((id * 137) % 463) + 24

export const getBlogClicks = (blog: Pick<blogResponseType, 'id' | 'count'>) =>
  blog.count ?? sampleClicks(blog.id)
