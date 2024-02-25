import quote from '../../../assets/utilty/icons/quote.svg'
import imgBaseUrl from '../../../store/ImgBaseUrl'

interface props {
  testimony: string,
  img:string,
  name:string
  caption: string
}

const CustomerReview = ({name, img, caption, testimony}: props) => {
  return (
    <div className='mt-[0.7rem] min-w-full max-w-full overflow-hidden lg:flex lg:items-center lg:gap-x-10'>
      <div className='flex gap-x-[0.77rem] items-start font-inter  lg:gap-x-[1.21rem]'>
        <img src={quote} className='object-fill w-[1.74294rem] h-[1.46281rem] lg:w-[2.80206rem] lg:h-[2.35175rem]' />
        <div>
          <p className=' text-sm font-medium leading-[1.34456rem] tracking-[-0.01119rem] text-wrap w-full text-textSecondary lg:text-[1.70988rem] lg:leading-[2.16156rem] lg:tracking-[-0.018rem] lg:mt-2'>{testimony}.</p>
          <div className='mt-3.5'>
            <h4 className='text-[0.7005rem] font-bold'>{name}</h4>
            <h5 className='text-[0.66769rem] font-medium'>{caption}</h5>
          </div>
        </div>
      </div>
      <div className='lg:min-w-[40%] lg:mr-1'>
        <img src={`${imgBaseUrl}${img}`} alt={name} className='mt-6 rounded-[0.74606rem] w-full aspect-[1/1.08] lg:aspect-[1/1.28]' />
      </div>
    </div>
  )
}

export default CustomerReview
