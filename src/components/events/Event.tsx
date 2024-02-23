import DOMPurify from 'dompurify'
import styles from './event.module.css'
import imgBaseUrl from '../../store/ImgBaseUrl'

interface props {
  name: string
  desc: string
  link1: string
}
const Event = ({name, desc, link1}: props) => {
  const sanitizedHtml = DOMPurify.sanitize(desc)
  return (
    <div className="mb-12 lg:flex lg:gap-x-10">
      <div className='relative w-full h-[30rem] sm:h-[35rem] lg:flex-1 lg:h-[30rem]'>
        <img src={`${imgBaseUrl}${link1}`} alt='eventImg' className='imgFocus w-0 h-0 rounded-lg object-cover' />
      </div>
      <div className="flex mt-3 flex-col gap-y-4 text-base leading-5 tracking-[-0.0075rem] text-eventText lg:flex-[1.3] lg:mt-0 ">
        <h3 className="font-bold text-2xl lg:text-[2rem] leading-[2.1175rem] tracking-[-0.02438rem] text-headerPrimary capitalize ">{name}</h3>
        <div className={styles.desc} dangerouslySetInnerHTML={{__html: sanitizedHtml}}>
        </div>
        <button className='btn text-textPrimary w-full h-[3.4375rem] lg:max-w-[8.80056rem]'>
          <a href='https://bookwhen.com/universalmindfulness' target="_blank">Book Now</a>
        </button>
      </div>
    </div>
  )
}

export default Event
