import Skeleton from 'react-loading-skeleton'

const HomeBlogSkeleton = () => {
  return (
    <div>
      <div className='w-full rounded-xl aspect-square'>
        <Skeleton className='w-full h-full' />
      </div>
      <Skeleton className='text-[1.61344rem] leading-[2.17388rem] mt-4' />
      <Skeleton className='text-base leading-3 w-[40%]'  />
      <Skeleton className='-[3.4375rem] lg:h-[3.28972rem] lg:max-w-[8.80056rem]' />
    </div>
  )
}

export default HomeBlogSkeleton
