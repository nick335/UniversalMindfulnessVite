
import Skeleton from 'react-loading-skeleton'

const TeamMemberSkeleton = () => {
  return (
    <div className='mb-8 lg:mb-12'>
      <div className='w-full aspect-[1.1/1]'>
        <Skeleton className='w-full h-full rounded-xl' />
      </div>
      <div className='mt-3'>
        <Skeleton className='text-[2rem] w-[40%] mb-3' />
        <Skeleton className='text-base leading-3 ' count={4} />
      </div>
    </div>
  )
}

export default TeamMemberSkeleton
