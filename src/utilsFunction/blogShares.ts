import { blogResponseType, blogSharesType } from "../types/api/response";
import { shareChannelType } from "../types/api/content";

// The channels our share buttons send; the backend accepts any channel string,
// so responses may contain more keys than these.
export const shareChannels: shareChannelType[] = ['facebook', 'x', 'linkedin', 'whatsapp', 'copy', 'native']

// Deterministic sample values shown until the deployed backend returns `shares`.
// Remove sampleShares once the field is live.
const sampleShares = (id: number): blogSharesType => ({
  facebook: ((id * 31) % 53) + 4,
  x: ((id * 17) % 29) + 2,
  linkedin: ((id * 23) % 19) + 1,
  whatsapp: ((id * 41) % 67) + 6,
  copy: ((id * 13) % 23) + 2,
  native: ((id * 7) % 17) + 1,
})

export const getBlogShares = (blog: Pick<blogResponseType, 'id' | 'shares'>) => {
  const byChannel = blog.shares ?? sampleShares(blog.id)
  const total = Object.values(byChannel).reduce((sum, n) => sum + n, 0)

  return { total, byChannel }
}

export const sumSharesByChannel = (blogs: Pick<blogResponseType, 'id' | 'shares'>[]): blogSharesType => {
  const totals: blogSharesType = {}
  blogs.forEach((blog) => {
    const { byChannel } = getBlogShares(blog)
    Object.entries(byChannel).forEach(([channel, n]) => {
      totals[channel] = (totals[channel] ?? 0) + n
    })
  })
  return totals
}
