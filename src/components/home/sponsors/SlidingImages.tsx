import Marquee from 'react-fast-marquee';
import imgBaseUrl from '../../../store/ImgBaseUrl';

interface props {
  images: string[]
}

const SlidingImages = ({images}: props) => {
  const slidingImages = images.map((each, idx) => {
    return <img key={idx} src={`${imgBaseUrl}${each}`} alt="sponsorImg" className={`max-h-[5.125rem] aspect-auto h-auto object-fill mr-14`} />
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
