import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaXTwitter } from 'react-icons/fa6'
import { MdContentCopy, MdIosShare } from 'react-icons/md'
import showToast from '../../../utilsFunction/showToast'
import { updateBlogShare } from '../../../api/updateBlogShare'
import { shareChannelType } from '../../../types/api/content'

interface props {
  title: string
  blogId?: number
}

const btnClasses = 'flexCenter w-10 h-10 rounded-full bg-bgSubHeader text-headerSecondary hover:bg-headerSecondary hover:text-white transition-colors'

const ShareBlog = ({ title, blogId }: props) => {
  const url = window.location.href
  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const trackShare = (channel: shareChannelType) => {
    if (!blogId) return
    updateBlogShare({ id: blogId, channel }).catch(() => {
      // analytics only — never interrupt the share itself
    })
  }

  const shareLinks: { name: string; channel: shareChannelType; href: string; icon: JSX.Element }[] = [
    {
      name: 'Facebook',
      channel: 'facebook',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: <FaFacebookF className='w-4 h-4' />,
    },
    {
      name: 'X',
      channel: 'x',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      icon: <FaXTwitter className='w-4 h-4' />,
    },
    {
      name: 'LinkedIn',
      channel: 'linkedin',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: <FaLinkedinIn className='w-4 h-4' />,
    },
    {
      name: 'WhatsApp',
      channel: 'whatsapp',
      href: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
      icon: <FaWhatsapp className='w-4 h-4' />,
    },
  ]

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(url)
      showToast('Link copied to clipboard', 'success')
      trackShare('copy')
    } catch {
      showToast('Could not copy the link', 'error')
    }
  }

  const nativeShare = () => {
    navigator.share({ title, url })
      .then(() => trackShare('native'))
      .catch(() => {
        // user closed the share sheet — nothing to do
      })
  }

  return (
    <div className='mt-10 flex flex-wrap items-center gap-x-4 gap-y-3'>
      <p className='font-semibold'>Share this post:</p>
      <div className='flex items-center gap-x-3'>
        {shareLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={`Share on ${link.name}`}
            title={`Share on ${link.name}`}
            className={btnClasses}
            onClick={() => trackShare(link.channel)}
          >
            {link.icon}
          </a>
        ))}
        <button type='button' onClick={copyLink} aria-label='Copy link' title='Copy link' className={btnClasses}>
          <MdContentCopy className='w-4 h-4' />
        </button>
        {typeof navigator.share === 'function' && (
          <button type='button' onClick={nativeShare} aria-label='Share' title='Share' className={btnClasses}>
            <MdIosShare className='w-4 h-4' />
          </button>
        )}
      </div>
    </div>
  )
}

export default ShareBlog
