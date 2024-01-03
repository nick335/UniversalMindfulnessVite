import Logo from '../../assets/header/Logo.svg'
import Nav from './Nav'
const Header = () => {
  return (
    <>
      <div className='w-full flexCenter mt-3 lg:mt-6 '>
        <img src={Logo} alt='logo' className='object-fit w-[7.05675rem] h-[4.48606rem]' />
      </div>
          <Nav />
    </>
  )
}

export default Header
