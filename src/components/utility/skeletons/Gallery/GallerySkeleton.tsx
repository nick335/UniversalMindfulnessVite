import Skeleton from 'react-loading-skeleton'

const GallerySkeleton = () => {
  return (
    <div className=' w-full gap-5 grid grid-cols-2 lg:grid-cols-4'>
      <div className=' w-full aspect-square'>
        <Skeleton className=' w-full h-full' />
      </div>
      <div className=' w-full aspect-square lg:hidden'>
        <Skeleton className=' w-full h-full' />
      </div>
      <div className=' w-full aspect-square row-span-2 col-span-2 lg:col-span-2'>
        <Skeleton className=' w-full h-full' />
      </div>
      <div className=' w-full lg:aspect-square row-span-2 aspect-auto lg:row-span-1 '>
        <Skeleton className=' w-full h-full' />
      </div>
      <div className=' w-full aspect-square'>
        <Skeleton className=' w-full h-full' />
      </div>
      <div className=' w-full aspect-square'>
        <Skeleton className=' w-full h-full' />
      </div>
    </div>
  )
}

export default GallerySkeleton
