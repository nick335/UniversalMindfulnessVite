import SectionBody from '../section/sectionBody'
import SectionHeader from '../header/sectionHeader'
import ContentDisplayDelete from './ContentDisplayDelete'
import { blogResponseType } from '../../../../types/api/response'
import DOMPurify from 'dompurify'
import { deleteContent } from '../../../../api/content/deleteContent'
import { getBlogViews } from '../../../../utilsFunction/blogViews'
import { getBlogShares } from '../../../../utilsFunction/blogShares'
import { MdOutlineVisibility, MdIosShare } from 'react-icons/md'


const ContentDisplay4 = ({id, title, header, body1, sub_section, link1, section, count, shares}: blogResponseType) => {
  const sanitizedHtml = DOMPurify.sanitize(body1);
  const views = getBlogViews({ id, count })
  const { total: totalShares } = getBlogShares({ id, shares })
  return (
    <SectionBody>
      <SectionHeader
        header={title}
        btnName='edit'
        routePath={`/admin/dashboard/blog/edit/${id}`}
      />
      <div className='mt-3 flex flex-wrap gap-2 font-inter'>
        <span className='inline-flex items-center gap-x-1.5 rounded-full bg-bgSubHeader px-3 py-1 text-xs font-semibold text-headerSecondary'>
          <MdOutlineVisibility className='w-4 h-4' />
          {views.toLocaleString()} views
        </span>
        <span className='inline-flex items-center gap-x-1.5 rounded-full bg-bgSubHeader px-3 py-1 text-xs font-semibold text-headerSecondary'>
          <MdIosShare className='w-4 h-4' />
          {totalShares.toLocaleString()} shares
        </span>
      </div>

      <div className='mt-[1.13rem] font-inter'>
        <div className='w-full aspect-[4/1]'>
          <img src={`https://myserver.universalmindfulness.co.uk/images/${link1}`}alt={title} className='imgFocus object-cover' />
        </div>
        <div className=' mt-5 pb-8 leading-[1.4375rem] text-sm tracking-[-0.018rem]'>
          <h3 className='font-semibold'>Header: {title}</h3>
          <div className='mt-2 line-clamp-5' dangerouslySetInnerHTML={{__html: sanitizedHtml}}>
          </div>
          <h4 className='font-semibold mt-2 capitalize'>Writer: {header}</h4>
          <h4 className='font-semibold mt-2 capitalize'>Category: {sub_section}</h4>
          <div className="mt-8 flex items-center justify-end">
            <ContentDisplayDelete queryKey={section} deleteFunc={deleteContent} payload={{id: id}} />
          </div>
        </div>
        
      </div>
    </SectionBody>
  )
}

export default ContentDisplay4
