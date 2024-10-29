import pencil from '../../../../assets/admin/pencil.svg'
import ContentDisplayDelete from './ContentDisplayDelete'
import { deleteContent } from '../../../../api/content/deleteContent'
import { Link } from 'react-router-dom'

interface props {
  id: number,
  title: string,
  body1: string,
  link1: string,
  section: string
  routePath: string
}


const ContentDisplay7 = ({ id, title, body1, link1,section, routePath  }: props) => {
  return (
    <div className="font-inter leading-[1.4375rem] text-sm tracking-[-0.018rem]">
      <div className='w-full aspect-[1.11/1]'>
        <img src={`https://myserver.universalmindfulness.co.uk/images/${link1}`} alt='demo' className='imgFocus object-cover' />
      </div>
      <div className='line-clamp-6'>
        <h3 className="font-semibold mt-[1.3rem] line-clamp-4  ">
          {title}
        </h3>
      </div>
      
      <div className="mt-1.5">
        <p>
          {body1}
        </p>
      </div>
      <div className="mt-8 flex items-center justify-between">
        <button className='flex items-center gap-x-2'>
          <Link to={routePath} className='flex items-center gap-x-2'>
            <span className=' capitalize underline text-headerPrimary'>edit</span>
            <img src={pencil} alt="pencil" className='w-6 h-6 object-fill' />
          </Link>
        </button>
        <ContentDisplayDelete deleteFunc={deleteContent} queryKey={section} payload={{id: id}} />
      </div>
    </div>
  )
}

export default ContentDisplay7
