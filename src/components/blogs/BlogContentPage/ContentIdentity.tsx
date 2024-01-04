import tag from '../../../assets/blog/tag.svg';
import account from '../../../assets/blog/account.svg';
import calender from '../../../assets/blog/calender.svg'
const ContentIdentity = () => {
  return (
    <div className='flex items-center gap-x-4 font-medium text-xs leading-[1.3365rem] lg:text-base lg:leading-[1.782rem] mt-7'>
      <div className='flex items-start gap-x-2'>
        <img alt='account' src={account} className='w-6 h-6 object-fill' />
        <p>Mary Snow</p>
      </div>
      <div className='flex items-start gap-x-2'>
        <img alt='calender' src={calender} className='w-6 h-6 object-fill' />
        <p>December 15 2023</p>
      </div>
      <div className='flex items-start gap-x-2'>
        <img alt='tag' src={tag} className='w-6 h-6 object-fill' />
        <p>Business</p>
      </div>
    </div>
  )
}

export default ContentIdentity
