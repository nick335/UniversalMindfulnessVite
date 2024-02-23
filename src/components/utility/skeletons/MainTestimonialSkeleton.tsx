import Skeleton from "react-loading-skeleton"

const MainTestimonialSkeleton = () => {
  return (
    <div className='lg:flex gap-x-[4.5rem] items-center lg:mx-[4.5rem]'>
      <div className='lg:flex-1 rounded-t-[6rem] w-full aspect-[1/1.23] lg:aspect-[1.05/1]'>
        <Skeleton className="w-full h-full rounded-t-[6rem]" />
      </div>
      <div className="mt-8 lg:flex-1 lg:mt-0">
        <Skeleton className="text-2xl w-full" />
        <p className="mt-4">
          <Skeleton className="text-base leading-3" count={8} />
        </p>
      </div>
    </div>
  )
}

export default MainTestimonialSkeleton
