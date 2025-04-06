interface SkeletonProps {
  max?: string
}

const PageHeaderSkeleton = ({ max = "45" }: SkeletonProps) => {
  return (
    <div className="mt-6 lg:mt-8 text-center">
      {/* Skeleton for the header */}
      <div className={`h-9 lg:h-14 bg-gray-200 rounded-md animate-pulse mx-auto lg:max-w-[${max}rem]`} />

      {/* Skeleton for the paragraph */}
      <div className="mt-[0.41rem] h-6 lg:h-7 bg-gray-200 rounded-md animate-pulse mx-auto max-w-[70%]" />
    </div>
  )
}

export default PageHeaderSkeleton

