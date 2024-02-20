import Skeleton from 'react-loading-skeleton'
const EventSkeleton = () => {
  return (
    <div className="mb-12 lg:flex lg:gap-x-10">
      <div className=" w-full h-[30rem] sm:h-[35rem] lg:flex-1 lg:h-[30rem]rounded-lg">
        <Skeleton className='w-full h-full rounded-lg' />
      </div>
      <div className="flex mt-3 flex-col gap-y-4 text-base leading-5 tracking-[-0.0075rem] text-eventText lg:flex-[1.3] lg:mt-0 ">
        <Skeleton className='text-2xl leading-5' count={2} />
        <Skeleton className='text-base leading-3' count={3} />
        <Skeleton className='w-[60%] mt-2' count={9} />
        <Skeleton className='text-base leading-3' count={5} />
        <Skeleton className='h-[3.4375rem] lg:max-w-[8.80056rem] rounded-lg' />
      </div>
    </div>
  )
}

export default EventSkeleton
