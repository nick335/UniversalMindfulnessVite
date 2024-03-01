import pencil from '../../../../assets/admin/pencil.svg'
import ContentDisplayDelete from './ContentDisplayDelete'
import { deleteContent } from '../../../../api/content/deleteContent'
import { Link } from 'react-router-dom'

interface props {
  id: number,
  title: string,
  body1: string,
  header: string,
  link1: string,
  section: string
  routePath: string
}


const ContentDisplay1 = ({ id, title, body1, header,link1,section, routePath  }: props) => {
  return (
    <div className="font-inter leading-[1.4375rem] text-sm tracking-[-0.018rem]">
      <div className='w-full aspect-[1.11/1]'>
        <img src={`https://myserver.universalmindfulness.co.uk/images/${link1}`} alt='demo' className='imgFocus object-cover' />
      </div>
      <div className='min-h-[6.9rem] max-h-[6.9rem] overflow-hidden line-clamp-6'>
        <p className="font-semibold mt-[1.3rem] line-clamp-4  ">
          {body1}
        </p>
      </div>
      
      <div className="mt-3.5">
        <h4>{title}</h4>
        <h5>{header}</h5>
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

export default ContentDisplay1
