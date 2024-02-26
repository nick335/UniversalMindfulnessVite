import DOMPurify from 'dompurify'
import styles from './about.module.css'
import imgBaseUrl from '../../store/ImgBaseUrl'

interface props {
  header: string,
  para: string,
  img: string
}

const SubSectionContent = ({ header, para, img }: props) => {
  const sanitizedHtml = DOMPurify.sanitize(para)
  return (
    <div className='w-full'>
      <div className='w-full  aspect-[2/1]'>
        <img src={`${imgBaseUrl}${img}`} alt={header} className='w-full h-full' />
      </div>
      <div className=" mt-10 lg:mr-20 xl:mr-28">
        <h3 className="font-semibold text-[2.5rem] text-headerPrimary">
          {header}
        </h3>
        <div className={`text-base leading-[1.782rem] mt-4 font-medium ${styles.para}`} dangerouslySetInnerHTML={{__html: sanitizedHtml}}>
        </div>
      </div>
    </div>
  )
}

export default SubSectionContent
