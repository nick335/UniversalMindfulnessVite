import Logo from '../../assets/header/Logo.svg'
import square from '../../assets/utilty/icons/adminSquare.svg'

const LoginLogos = () => {
  return (
    <div className=' mt-12'>
      <img src={Logo} alt='logo' className='object-fill w-[7.66856rem] h-[4.875rem]' />
      <div className='mt-16 flex justify-end mr-[30%]'>
        <img src={square} alt='square' className='object-fill w-[3.74969rem] h-14' />
      </div>
    </div>
  )
}

export default LoginLogos
