import Logo from '../../../assets/header/Logo.svg';
import Logout from  '../../../assets/admin/nav/logout.svg';
import NavLI from './NavLI';
import data from './navData';
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';
const SideBar = () => {
  const navigate = useNavigate()
  const navLIEl = data.map((each, idx) => {
    return <NavLI 
              key={idx}
              name={each.name}
              img={each.img}
              routeName={each.routeName}
          />
  }) 

  const handleLogout = () => {
    Cookies.remove('adminToken')
    navigate('/admin')
  } 
  return (
    <aside className='min-w-[14.6875rem] w-[14.6875rem] max-w-[14.6875rem] bg-bgAdminNav text-textPrimary font-inter fixed top-0 left-0'>
      <div className='h-screen max-h-screen overflow-y-scroll'>
        <div className="pt-4 flex justify-center">
          <img src={Logo} alt='logo' className='object-fit w-[7.05675rem] h-[4.48606rem]' />
        </div>
        <ul className='mt-[1.75rem] mx-[0.71rem]'>
          {navLIEl}
        </ul>
        <div className='flex items-center gap-x-4 pl-10 mt-36 cursor-pointer w-fit mb-12'>
          <img src={Logout} alt='logout' className='w-6 h-6 object-fill' />
          <h3 className='text-sm' onClick={handleLogout} >Logout</h3>
        </div>
      </div> 
    </aside>
  )
}

export default SideBar
