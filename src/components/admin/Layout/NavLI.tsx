import { Link, useLocation } from 'react-router-dom';

interface props {
  img: string,
  name: string,
  routeName: string,
}


const NavLI = ({ name, img, routeName}: props) => {
  const route = useLocation().pathname
  const parts = route.split('/');
  const dashboardIndex = parts.indexOf('dashboard');

  const routename = dashboardIndex !== -1 && dashboardIndex < parts.length - 1 ? parts[dashboardIndex + 1] :  ''
  const isActive = routename === routeName ? true : false
  return (
    <Link to={`/admin/dashboard/${routeName}`}>
      <li className={`flex items-center text-sm leading-[1.3125rem]
      tracking-[-0.00963rem] gap-x-4 px-6 py-4 cursor-pointer rounded ${isActive ? 'bg-bgPrimary': 'bg-transparent'} transition-all ease-in-out duration-200 `}>
        <span>
        <img src={img} alt='logout' className='w-6 h-6 object-fill' />
        </span>
        {name}
      </li>
    </Link>
    
  )
}

export default NavLI
