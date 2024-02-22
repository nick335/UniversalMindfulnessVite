import SectionBody from '../section/sectionBody'
import SectionHeader from '../header/sectionHeader'
import demo from '../../../../assets/admin/demo.png'
import ContentDisplayDelete from './ContentDisplayDelete'
import { blogResponseType } from '../../../../types/api/response'
import DOMPurify from 'dompurify'

// interface props {
//   header: string,
//   btnName: string,
// }

const ContentDisplay4 = ({id, title, header, body1, body2, link1}: blogResponseType) => {
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
          <img src={demo} alt='demo' className='imgFocus object-cover' />
        </div>
        <div className=' mt-5 pb-8 leading-[1.4375rem] text-sm tracking-[-0.018rem]'>
          <h3 className='font-semibold'>Header: {title}</h3>
          <div className='mt-2 line-clamp-5' dangerouslySetInnerHTML={{__html: sanitizedHtml}}>
          </div>
          <h4 className='font-semibold mt-2'>Writer: {body2}</h4>
          <h4 className='font-semibold mt-2'>Category: {header}</h4>
          <div className="mt-8 flex items-center justify-end">
            <ContentDisplayDelete />
          </div>
        </div>
        
      </div>
    </SectionBody>
  )
}

export default ContentDisplay4
