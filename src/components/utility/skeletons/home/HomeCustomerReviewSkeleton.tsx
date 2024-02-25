import Skeleton from "react-loading-skeleton"

const HomeCustomerReviewSkeleton = () => {
  return (
    <div className='mt-[0.7rem]  lg:flex lg:items-center lg:gap-x-10'>
      <div className='w-full'>
        <Skeleton className="text-base leading-3"  count={8}/>
        <div className="mt-3.5">
          <Skeleton className="w-[30%] text-base leading-3" />
          <Skeleton className="w-[40%] text-base leading-3" />
        </div>
      </div>
      <div className='lg:max-w-[40%] lg:mr-1 w-full aspect-[1/1.08] lg:aspect-[1/1.28] rounded-[0.74606rem] mt-6'>
        <Skeleton className="w-full h-full rounded-[0.74606rem]" />
      </div>
    </div>
  )
}

export default HomeCustomerReviewSkeleton
