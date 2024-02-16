import { Icon } from '@iconify/react';
interface props {
  isLoading: boolean,
}


const Update = ({ isLoading }: props) => {
  return (
    <button type="submit" disabled={isLoading} className='w-[11.5124rem] h-[3.9375rem] bg-[#152848] rounded-lg text-white font-inter text-base font-bold flex items-center justify-center cursor-pointer'>
      { isLoading ? <Icon icon="line-md:loading-loop" className='text-2xl' /> : 'Update Changes' 
      }
    </button>
  )
}

export default Update
