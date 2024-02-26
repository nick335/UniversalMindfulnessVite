import DOMPurify from 'dompurify'
import styles from '../about/about.module.css'
import imgBaseUrl from '../../store/ImgBaseUrl'
interface props {
  header: string,
  para: string,
  img: string
}

const DesktopWWOSectionTopContent = ({header, para, img}: props) => {
  const sanitizedHtml = DOMPurify.sanitize(para)
  return (
    <div>
      <div>
        <img src={`${imgBaseUrl}${img}`} alt='image' className='w-full object-fill aspect-[2/1]' />
      </div>
      <div className='mt-10 lg:mr-20 xl:mr-28'>
        <h3 className="font-semibold text-[2.5rem] text-headerPrimary">
          {header}
        </h3>
        <div className={styles.para} dangerouslySetInnerHTML={{__html: sanitizedHtml}}></div>
      </div>
    </div>
  )
}

export default DesktopWWOSectionTopContent
