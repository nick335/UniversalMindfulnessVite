import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

interface props {
  header: string,
  btnName: string
  routePath: string | undefined
}

const SectionHeader = ({ header, btnName, routePath }: props) => {
  return (
    <div className="flex items-center justify-between gap-x-[20rem] font-inter">
      <h3 className="text-textSecondary capitalize font-bold text-[1.43519rem]">{ header }</h3>
      <button className=" py-[0.88rem] px-[1.32rem] rounded-[0.22081rem] bg-btnAdmin text-textPrimary capitalize">
        <Link to={ routePath ? routePath : '/'} className="flex items-center gap-x-[0.88rem]">
          <MdAdd className='w-[1.32481rem] h-[1.32481rem]'/>
          { btnName }
        </Link>
        
      </button>
    </div>
  )
}

export default SectionHeader
