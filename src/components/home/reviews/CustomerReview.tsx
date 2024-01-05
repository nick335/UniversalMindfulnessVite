import quote from '../../../assets/utilty/icons/quote.svg'
import demoImg from '../../../assets/home/review.png'



const CustomerReview = () => {
  return (
    <div className='mt-[0.7rem] min-w-full max-w-full overflow-hidden lg:flex lg:items-center lg:gap-x-10'>
      <div className='flex gap-x-[0.77rem] items-start font-inter  lg:gap-x-[1.21rem] lg'>
        <img src={quote} className='object-fill w-[1.74294rem] h-[1.46281rem] lg:w-[2.80206rem] lg:h-[2.35175rem]' />
        <div>
          <p className=' text-sm font-medium leading-[1.34456rem] tracking-[-0.01119rem] text-wrap w-full text-textSecondary lg:text-[1.70988rem] lg:leading-[2.16156rem] lg:tracking-[-0.018rem] lg:mt-2'>Universal Mindfulness helped me seamlessly pivot my practice to the virtual space and has completely shifted my practice for the long term. It's perfect to have such a wonderful and accessible tool for clinicians and clients alike.</p>
          <div className='mt-3.5'>
            <h4 className='text-[0.7005rem] font-bold'>Sarah Murray, LCSW</h4>
            <h5 className='text-[0.66769rem] font-medium'>Heart Wild Therapy, LLC</h5>
          </div>
        </div>
      </div>
      <div className='lg:min-w-[40%] lg:mr-1'>
        <img src={demoImg} alt='customer' className='mt-6 rounded-[0.74606rem] w-full aspect-[1/1.08] lg:aspect-[1/1.28]' />
      </div>
    </div>
  )
}

export default CustomerReview
