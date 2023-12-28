import data from "./sponsorsData"

const SlidingImages = () => {
  const slidingImages = data.map((each, idx) => {
    return <img key={idx} src={each.img} alt="sponsorImg" className={`${each.style} object-fill`} />
  })  
  return (
    <div className='w-full overflow-hidden flex whitespace-nowrap transition-all duration-1000 ease-linear'>
      <div className='flex items-center gap-x-14 animate-infiniteImageScroll '>
            {slidingImages}
            {slidingImages}
            {slidingImages}
      </div>
    </div>
  )
}

export default SlidingImages
