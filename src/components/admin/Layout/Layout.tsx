import { Outlet } from 'react-router-dom'
import SideBar from './SideBar'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Layout = () => {
  return (
      <main className='flex'>
        <SideBar />
        <div className='w-full'>
          <div className='bg-white shadow-adminNav w-full min-h-[4.25rem]'></div>
          <div className='min-h-[200vh] pl-[16.6875rem] w-full pr-[2rem] text-black mt-12'>
            <Outlet />
          </div>
        </div>
        <ToastContainer />
      </main>
  )
} 

export default Layout
