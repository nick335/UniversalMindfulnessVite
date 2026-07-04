import SectionBody from '../../utility/admin/section/sectionBody'
import { blogResponseType, blogSharesType } from '../../../types/api/response'
import { getBlogViews } from '../../../utilsFunction/blogViews'
import { shareChannels, sumSharesByChannel } from '../../../utilsFunction/blogShares'
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { MdContentCopy, MdIosShare, MdShare } from 'react-icons/md'

const TOP_BLOGS_SHOWN = 5

const channelMeta: Record<string, { label: string; icon: JSX.Element }> = {
  facebook: { label: 'Facebook', icon: <FaFacebookF className='w-4 h-4' /> },
  x: { label: 'X', icon: <FaXTwitter className='w-4 h-4' /> },
  linkedin: { label: 'LinkedIn', icon: <FaLinkedinIn className='w-4 h-4' /> },
  whatsapp: { label: 'WhatsApp', icon: <FaWhatsapp className='w-4 h-4' /> },
  copy: { label: 'Link copied', icon: <MdContentCopy className='w-4 h-4' /> },
  native: { label: 'Device share', icon: <MdIosShare className='w-4 h-4' /> },
}

// channel keys are dynamic, so unknown ones get a generic icon and their own name
const getChannelMeta = (channel: string) =>
  channelMeta[channel] ?? {
    label: channel.charAt(0).toUpperCase() + channel.slice(1),
    icon: <MdShare className='w-4 h-4' />,
  }

interface props {
  blogs: blogResponseType[]
  isLoading?: boolean
  totalCount?: number // aggregate views across all matching blogs, from the API
  totalShares?: blogSharesType // aggregate per-channel shares across all matching blogs, from the API
}

const BlogAnalytics = ({ blogs, isLoading, totalCount, totalShares }: props) => {
  const withViews = blogs
    .map((blog) => ({ ...blog, views: getBlogViews(blog) }))
    .sort((a, b) => b.views - a.views)
  const totalViews = totalCount ?? withViews.reduce((sum, blog) => sum + blog.views, 0)
  const topBlogs = withViews.slice(0, TOP_BLOGS_SHOWN)
  const maxViews = topBlogs[0]?.views || 1

  const channelTotals = totalShares ?? sumSharesByChannel(blogs)
  const totalSharesCount = Object.values(channelTotals).reduce((sum, n) => sum + n, 0)
  // known channels first in fixed order, then any new backend channels alphabetically
  const channelKeys = [
    ...shareChannels.filter((channel) => channelTotals[channel] !== undefined),
    ...Object.keys(channelTotals).filter((channel) => !(shareChannels as string[]).includes(channel)).sort(),
  ]

  const usingSampleData = totalCount === undefined || totalShares === undefined
    || blogs.some((blog) => blog.count === undefined || blog.shares === undefined)

  return (
    <SectionBody>
      <div className='flex flex-wrap items-center justify-between gap-x-6 gap-y-2 font-inter'>
        <h3 className='text-textSecondary capitalize font-bold text-[1.43519rem]'>blog analytics</h3>
        {!isLoading && blogs.length > 0 && usingSampleData && (
          <span className='text-xs font-medium text-textSecondary/60 border border-textSecondary/30 rounded-full px-3 py-1'>
            Sample data — live counts coming soon
          </span>
        )}
      </div>

      <div className='mt-6 grid grid-cols-1 xsm:grid-cols-3 gap-4 font-inter'>
        <div className='rounded-md border border-formBorder bg-bgSubHeader/60 px-6 py-5'>
          <p className='text-sm text-textSecondary/70'>Total blogs</p>
          <p className='mt-1 text-[2.5rem] leading-none font-bold text-textSecondary'>
            {isLoading ? '—' : blogs.length.toLocaleString()}
          </p>
        </div>
        <div className='rounded-md border border-formBorder bg-bgSubHeader/60 px-6 py-5'>
          <p className='text-sm text-textSecondary/70'>Total views</p>
          <p className='mt-1 text-[2.5rem] leading-none font-bold text-textSecondary'>
            {isLoading ? '—' : totalViews.toLocaleString()}
          </p>
        </div>
        <div className='rounded-md border border-formBorder bg-bgSubHeader/60 px-6 py-5'>
          <p className='text-sm text-textSecondary/70'>Total shares</p>
          <p className='mt-1 text-[2.5rem] leading-none font-bold text-textSecondary'>
            {isLoading ? '—' : totalSharesCount.toLocaleString()}
          </p>
        </div>
      </div>

      {!isLoading && blogs.length > 0 && channelKeys.length > 0 && (
        <div className='mt-6 font-inter'>
          <h4 className='font-semibold text-textSecondary'>Shares by channel</h4>
          <div className='mt-3 flex flex-wrap gap-2'>
            {channelKeys.map((channel) => {
              const meta = getChannelMeta(channel)
              return (
                <span
                  key={channel}
                  className='inline-flex items-center gap-x-2 rounded-full bg-bgSubHeader px-4 py-2 text-sm text-textSecondary'
                >
                  <span className='text-headerSecondary'>{meta.icon}</span>
                  {meta.label}
                  <span className='font-bold tabular-nums'>{(channelTotals[channel] ?? 0).toLocaleString()}</span>
                </span>
              )
            })}
          </div>
        </div>
      )}

      {!isLoading && topBlogs.length > 0 && (
        <div className='mt-8 pb-4 font-inter'>
          <h4 className='font-semibold text-textSecondary'>Most viewed blogs</h4>
          <ul className='mt-4 space-y-3'>
            {topBlogs.map((blog) => (
              <li key={blog.id} className='grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4'>
                <div className='min-w-0'>
                  <p className='truncate text-sm text-textSecondary'>{blog.title}</p>
                  <div className='mt-1 h-1.5 w-full rounded-full bg-bgSubHeader'>
                    <div
                      className='h-full rounded-full bg-headerSecondary'
                      style={{ width: `${Math.max((blog.views / maxViews) * 100, 2)}%` }}
                    />
                  </div>
                </div>
                <span className='text-sm font-semibold text-textSecondary tabular-nums'>
                  {blog.views.toLocaleString()}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </SectionBody>
  )
}

export default BlogAnalytics
