import { Link } from 'react-router-dom'
import { HiArrowNarrowLeft, HiArrowNarrowRight } from 'react-icons/hi'

interface props {
 currentPage: number
 TotalPages: number
 path: string
}


const PaginationController = ({ currentPage, TotalPages, path  }: props) => {
 const currentPageValue = currentPage * 1
 const prevPage = currentPageValue === 1 ? 1 : currentPage  - 1
 const nextPage =  currentPageValue + 1

 const disableNextPage = currentPage === TotalPages ? true : false

  return (
    <div className='flexCenter mt-16 font-sans'>
     <div className='flex items-center border-[0.125rem] border-black rounded-lg p-0'>
      <Link to={`${path}${prevPage}`}>
       <div className={` cursor-pointer flex items-center gap-y-2 p-y-2 pl-4 pr-6  ${currentPageValue === 1 ? '': 'PaginationModule_Container_ControlHover'  }`}>
        <HiArrowNarrowLeft />
        <h3 className='text-base font-medium'>Prev</h3>
       </div>
      </Link>
      
      <div className='px-4 py-2 bg-black h-max text-white font-normal'>
       <p>Page {currentPage} of {TotalPages}</p>
      </div>
      <Link to={`${
        disableNextPage ? `${path}${currentPage}` : `${path}${nextPage}`
      }`} >
       <div className='cursor-pointer flex items-center gap-y-2 py-2 pl-6 pr-4 PaginationModule_Container_ControlHover'>
        <h3 className='text-base font-medium'>Next</h3>
        <HiArrowNarrowRight />
       </div>
      </Link>
      
     </div>
    </div>
  )
}

export default PaginationController