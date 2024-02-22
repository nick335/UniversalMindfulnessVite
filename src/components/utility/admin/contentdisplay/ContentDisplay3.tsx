import pencil from '../../../../assets/admin/pencil.svg'
import ContentDisplayDelete from './ContentDisplayDelete'
import { teamResponseType } from '../../../../types/api/response'
const ContentDisplay3 = ({ id, title, header, body1, link1, section}: teamResponseType) => {
  return (
    <div className="font-inter leading-[1.4375rem] text-sm tracking-[-0.018rem]">
      <div className='w-full aspect-[1.11/1]'>
        <img src={`https://myserver.universalmindfulness.co.uk/images/${link1}`} alt='demo' className='imgFocus object-cover' />
      </div>
      <h4 className='font-semibold mt-[1.3rem]'>{title}, {header}</h4>
      <p className="font-semibold mt-[1.3rem] line-clamp-6">
        {body1}
      </p>
      <div className="mt-8 flex items-center justify-between">
        <button className='flex items-center gap-x-2'>
          <span className=' capitalize underline text-headerPrimary'>edit</span>
          <img src={pencil} alt="pencil" className='w-6 h-6 object-fill' />
        </button>
       <ContentDisplayDelete />
      </div>
    </div>
  )
}

export default ContentDisplay3
