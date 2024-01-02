import data from "./sponsorsData"
import Marquee from 'react-fast-marquee';

const SlidingImages = () => {
  const slidingImages = data.map((each, idx) => {
    return <img key={idx} src={each.img} alt="sponsorImg" className={`${each.style} object-fill mr-14`} />
  })  
  return (
    <Marquee
      className='flex items-center'
      pauseOnHover={true}
      pauseOnClick={true}
    >
      {slidingImages}
    </Marquee>
  )
}

export default SlidingImages
