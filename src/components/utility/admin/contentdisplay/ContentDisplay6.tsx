
import SectionBody from '../section/sectionBody'
import SectionHeader from '../header/sectionHeader'
import imgBaseUrl from '../../../../store/ImgBaseUrl'
import DOMPurify from 'dompurify'
import ContentDisplayDelete from './ContentDisplayDelete';
import { deleteContent } from '../../../../api/content/deleteContent';

interface props {
  section: string
  title: string
  body: string
  id: number
  img: string
  routePath: string
}

const ContentDisplay6 = ({ title, body, id, img, routePath, section}: props) => {
  const sanitizedHtml = DOMPurify.sanitize(body)
  return (
    <SectionBody>
      <SectionHeader 
        header={title}
        btnName='edit'
        routePath={`${routePath}${id}`}
      />
      <div className='mt-[1.13rem] font-inter'>
        <div className='w-full aspect-[4/1]'>
          <img src={`${imgBaseUrl}${img}`} alt={title} className='imgFocus object-cover' />
        </div>
        <div className=' mt-5 pb-8 leading-[1.4375rem] text-sm tracking-[-0.018rem]'>
          <h3 className='font-semibold mb-2'>Header: {title}</h3>
          <div className='line-clamp-5' dangerouslySetInnerHTML={{__html: sanitizedHtml}}></div>
        </div>
        <div className="mt-8 flex items-center justify-end">
            <ContentDisplayDelete queryKey={section} deleteFunc={deleteContent} payload={{id: id}} />
        </div>
      </div>
    </SectionBody>
  )
}

export default ContentDisplay6
