import DOMPurify from 'dompurify'
import styles from '../about/about.module.css'
import imgBaseUrl from '../../store/ImgBaseUrl'

interface props {
  title: string
  img2: string
  img3: string
  body: string
}

const DesktopWWOSectionBottomContent = ({title, img2, img3, body}: props) => {
  const sanitizedHtml = DOMPurify.sanitize(body)
  return (
    <div className="ml-[5%] mt-5">
      <div className='grid grid-cols-2 gap-x-8 lg:mr-20 xl:mr-28"'>
        <div className='w-full aspect-[1.3/1]'>
          <img src={`${imgBaseUrl}${img2}`} alt={`${title}image2`} className='w-full aspect-[1.3/1]' />
        </div>
        <div className='w-full aspect-[1.3/1]'>
          <img src={`${imgBaseUrl}${img3}`} alt={`${title}image3`} className='w-full aspect-[1.3/1] object-fill' />
        </div>
      </div>
      <div className="ml-[25.25rem] lg:mr-20 xl:mr-28 mt-4">
        {(body && body.length > 0 && body !== 'undefined') && <div className={`text-base leading-[1.782rem] font-medium ${styles.para}`} dangerouslySetInnerHTML={{__html: sanitizedHtml}}>
        </div>}
      </div>
    </div>
  )
}

export default DesktopWWOSectionBottomContent
