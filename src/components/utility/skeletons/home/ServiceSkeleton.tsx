import Skeleton from 'react-loading-skeleton'

const ServiceSkeleton = () => {
  return (
    <div className='mt-10'>
      <div className='w-full aspect-video rounded-lg'>
        <Skeleton className='w-full h-full' />
      </div>
      <div className="text-center lg:mt-4 flex flex-col gap-y-[0.66rem] lg:gap-y-4">
        <Skeleton className="text-[1.61344rem]" />
        <div>
          <Skeleton className="text-base leading-3  lg:max-w-[27.8125rem] lg:mx-auto "  />
          <Skeleton className="text-base leading-3  lg:max-w-[24.8125rem] lg:mx-auto "  />
          <Skeleton className="text-base leading-3  lg:max-w-[20.8125rem] lg:mx-auto "  />
        </div>
        <Skeleton className="text-base leading-3  max-w-[8.8125rem] lg:mx-auto mt-1"  />
      </div>
    </div>
  )
}

export default ServiceSkeleton
