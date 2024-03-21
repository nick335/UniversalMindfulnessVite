import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { imageResponseType } from "../../types/api/response"
import imgBaseUrl from "../../store/ImgBaseUrl"

interface props {
  rowIndex: number
  row: imageResponseType[]
  interval: number
}

const AboutSwitchingAni = ({ rowIndex, row, interval }: props) => {
  const aniInterval = interval
  const images = row.map((each) => {
    return `${imgBaseUrl}/${each.link}`
  })
  const [currentImageIndex, setImageCurrentIndex] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setImageCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, aniInterval);
  
    // Show the first image immediately after component mount
    setImageCurrentIndex(0);
  
    return () => clearInterval(interval);
  }, [aniInterval, images.length]);
  return (
    <div
      className={`
      ${
        rowIndex === 2  ?   'row-span-2 !aspect-auto lg:row-span-1' : ''
      }
        w-full aspect-square bg-bgNav
      `}
    >
      <AnimatePresence mode="wait">
        <motion.img 
          key={(currentImageIndex)}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}}
          transition={{duration: 0.5}}
          src={images[currentImageIndex]}
          alt='image'
          className="object-cover imgFocus"
        />
      </AnimatePresence>
    </div>
  )
}

export default AboutSwitchingAni
