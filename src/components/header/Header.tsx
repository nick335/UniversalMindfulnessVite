import Logo from '../../assets/header/Logo.svg'
import Nav from './Nav'
const Header = () => {
  return (
    <header>
      <div className='w-full flexCenter mt-3 lg:mt-6'>
        <img src={Logo} alt='logo' className='object-fit w-[7.05675rem] h-[4.48606rem]' />
      </div>
      <div className='mt-[1.38rem]'>
        <div className='sticky top-0 z-30'>
          <Nav />
        </div>
        
      </div>
    </header>
  )
}

export default Header
