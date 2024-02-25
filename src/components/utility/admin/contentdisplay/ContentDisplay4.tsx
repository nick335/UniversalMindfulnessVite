import SectionBody from '../section/sectionBody'
import SectionHeader from '../header/sectionHeader'
import ContentDisplayDelete from './ContentDisplayDelete'
import { blogResponseType } from '../../../../types/api/response'
import DOMPurify from 'dompurify'
import { deleteContent } from '../../../../api/content/deleteContent'


const ContentDisplay4 = ({id, title, header, body1, sub_section, link1, section}: blogResponseType) => {
  const sanitizedHtml = DOMPurify.sanitize(body1);
  return (
    <SectionBody>
      <SectionHeader 
        header={title}
        btnName='edit'
        routePath='/admin/dashboard'
      />

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
