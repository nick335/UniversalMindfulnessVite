import { Link, Outlet, useLocation } from "react-router-dom"

const AdminAbout = () => {
  const location = useLocation().pathname
  return (
    <div >
      <div>
        <ul className="flex items-center gap-x-8 font-inter font-medium text-[#8692A6]">
          <li className={`cursor-pointer pb-1 transition-all ease-in duration-100 ${ location === '/admin/dashboard/about' ? 'border-b-[3px] text-textSecondary border-b-textSecondary' : '' } `}><Link to='/admin/dashboard/about' >About us</Link></li>
          <li className={`cursor-pointer pb-1 transition-all ease-in duration-100  ${ location === '/admin/dashboard/about/meettheteam' ? 'border-b-[3px] text-textSecondary border-b-textSecondary' : '' } `}><Link to='/admin/dashboard/about/meettheteam'>Meet the Team </Link></li>
        </ul>
      </div>
      <div className="mt-8">
        <Outlet />
      </div>
    </div>
  )
}

export default AdminAbout
