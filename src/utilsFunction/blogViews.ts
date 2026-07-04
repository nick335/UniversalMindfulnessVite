import { blogResponseType } from "../types/api/response";

// Deterministic sample values shown until the deployed backend returns `count`.
// Remove sampleViews once the field is live.
const sampleViews = (id: number) => ((id * 137) % 463) + 24

export const getBlogViews = (blog: Pick<blogResponseType, 'id' | 'count'>) =>
  blog.count ?? sampleViews(blog.id)
