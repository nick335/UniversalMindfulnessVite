import Skeleton from 'react-loading-skeleton'

const PopularBlogSkeleton = () => {
  return (
    <div className='mb-8 font-bold text-[0.9665rem] leading-[1.17356rem]'>
      <Skeleton className='font-bold text-[0.9665rem] leading-[1.17356rem] w-[50%]' />
      <Skeleton className='mt-[0.7rem] w-[90%] text-base font-semibold leading-3' />
    </div>
  )
}

export default PopularBlogSkeleton
