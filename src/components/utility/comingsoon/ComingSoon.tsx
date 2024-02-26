import { Link } from 'react-router-dom'
import star from '../../../assets/utilty/icons/Star.svg'
import tape1 from '../../../assets/utilty/icons/Washitape 2.svg'
import tape2 from '../../../assets/utilty/icons/Washitape3.svg'
import tape3 from '../../../assets/utilty/icons/Washitape5.svg'
import tape4 from '../../../assets/utilty/icons/Washitape4.svg'
const ComingSoon = () => {
  return (
    <div className='w-fit mx-auto mt-20 text-3xl lg:text-[2.625rem] xl:text-[3.625rem] font-lato text-center relative lg:leading-[3.625rem] '>
      <h2>Our <span className=' text-headerPrimary'>New Shop</span> is</h2>
      <h3 className='text-[3.5rem] mt-5 lg:leading-[9.375rem] lg:text-[7rem] xl:text-[9.375rem] text-headerPrimary'>Coming Soon</h3>
      <p className='mt-5 lg:mt-7'>Until then look at</p>
      <div>
        <button className=' mt-5 text-base font-bold btn h-[3.4375rem] lg:h-[3.28972rem] text-textPrimary font-lato w-full max-w-[10rem] lg:max-w-[12.75rem]'>
          <Link to='/whatweoffer'>
            What We Offer
          </Link>
        </button>
      </div>
      <img src={star} className=' w-[1.75rem] h-[1.75rem] lg:w-[3.75rem] lg:h-[3.75rem] absolute object-fill bottom-0 right-8  lg:-right-32 ' alt='star1' />
      <img src={star} className=' w-[2.63125rem] h-[2.63125rem] lg:w-[5.63125rem] lg:h-[5.63125rem] rotate-6 absolute object-fill top-0 right-0  lg:-right-32 ' alt='star2' />
      <img src={star} className=' w-[2.375rem] h-[2.375rem] lg:w-[9.375rem] lg:h-[9.375rem]  absolute object-fill top-[35%] lg:top-[40%] -translate-y-1/2 rotate-[4.6deg] -left-7 lg:-left-44 ' alt='star3' />
      <img src={tape1} className=' w-[6.375rem] h-[6.375rem]  lg:w-[9.375rem] lg:h-[9.375rem]  absolute object-fill lg:-top-28 -top-[4.5rem]  rotate-[4.6deg] ' alt='tape1' />
      <img src={tape2} className=' w-[2.05rem] h-[1.8rem] lg:w-[4.05rem] lg:h-[3.5rem] right-[3rem] absolute object-fill -top-12 lg:-top-28 lg:right-0 rotate-[4.6deg] ' alt='tape2' />
      <img src={tape3} className=' w-[2.05rem] h-[1.7rem] lg:w-[4.05rem] lg:h-[3.5rem]  absolute object-fill -bottom-16 lg:-bottom-36 left-16  rotate-[4.6deg] ' alt='tape3' />
      <img src={tape4} className=' w-[9.21rem] h-[6.5rem] lg:w-[12.21rem] lg:h-[9.5rem]  absolute object-fill -bottom-[8rem] lg:-bottom-[15rem] lg:right-16  right-4' alt='tape4' />
    </div>
  )
}

export default ComingSoon
