import SectionBody from '../section/sectionBody'
import SectionHeader from '../header/sectionHeader'
import { eventResponseType } from '../../../../types/api/response'
import DOMPurify from 'dompurify';
import ContentDisplayDelete from './ContentDisplayDelete';


const ContentDisplay2 = ({ id, title, body1, link1}: eventResponseType) => {
  const sanitizedHtml = DOMPurify.sanitize(body1);
  return (
    <SectionBody>
      <SectionHeader 
        header={title}
        btnName='edit'
        routePath='admin/dashboard'
      />

      <div className='mt-[1.13rem] font-inter'>
        <div className='w-full aspect-[4/1]'>
          <img src={`https://myserver.universalmindfulness.co.uk/images/${link1}`} alt='demo' className='imgFocus object-cover' />
        </div>
        <div className=' mt-5 pb-8 leading-[1.4375rem] text-sm tracking-[-0.018rem]'>
          <h3 className='font-semibold'>Header: {title} </h3>
          <div className=' line-clamp-5 ' dangerouslySetInnerHTML={{__html: sanitizedHtml}}>          
          </div>
        </div>
        <div className="mt-8 flex items-center justify-end">
            <ContentDisplayDelete />
        </div>
      </div>
    </SectionBody>
  )
}

export default ContentDisplay2
