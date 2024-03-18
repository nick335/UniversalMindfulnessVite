import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

interface props {
  rowIndex: number
  row: string[]
  interval: number
}

const AboutSwitchingAni = ({ rowIndex, row, interval }: props) => {
  const aniInterval = interval
  const actualRowIndex = rowIndex
  const images = row.map((_, idx) => {
    return `https://picsum.photos/700/600?random=${idx + 1 + rowIndex}`
  })
  const [currentImageIndex, setImageCurrentIndex] = useState(0)


  useEffect(() => {
    const interval = setInterval(() => {
      setImageCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, (aniInterval * currentImageIndex));

    return () => clearInterval(interval);
  },[aniInterval, currentImageIndex, actualRowIndex])
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
