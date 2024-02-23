import Skeleton from "react-loading-skeleton"

const TestimonialSkeleton = () => {
  return (
    <div>
      <div className="w-full aspect-[1.06/1] lg:aspect-[1.05/1] rounded-[1.5rem]">
        <Skeleton className="w-full h-full rounded-[1.5rem]" />
      </div>
      <div className="mt-4">
        <Skeleton className="text-[2rem] w-full" />
      </div>
      <p className="mt-4">
        <Skeleton className="text-base leading-3" count={4} />
      </p>
    </div>
  )
}

export default TestimonialSkeleton
