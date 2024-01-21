import line from '../../assets/utilty/icons/line.svg'
import L from '../../assets/utilty/icons/L.svg'
const LoginLeftHero = () => {
  return (
    <div className='font-inter max-w-[25.5625rem]  text-textPrimary mt-[7rem] pb-80 '>
      <div className="relative">
        <h3 className=' text-4xl font-black '>Welcome back to Universal Mindfulness</h3>
        <img src={line} alt='line' className='object-fill w-[12.03125rem] h-[1.875rem]' />
      </div>
      <p className='mr-10 mt-4 leading-[1.45rem]'>
        Our belief is that everyone has the right to a happy and positive life and we each have the capabilities within us to achieve that.
      </p>
      <div className='mt-10 flex justify-end'>
        <img src={L} alt='LBlock'className='object-fill w-[2.09375rem] h-[2.0625rem] -mr-4' />
      </div>
    </div>
  )
}

export default LoginLeftHero
