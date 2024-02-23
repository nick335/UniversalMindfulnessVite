import  { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import imgBaseUrl from '../../../store/ImgBaseUrl';
interface ImageSwitcherProps {
  images: string[];
}
const HeroImgSwitcher = ({images}: ImageSwitcherProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length,]);
  return (
    <div className='w-full h-full overflow-hidden'>
    <AnimatePresence mode='popLayout'>
      <motion.img
        key={currentIndex}
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 100, transition: { opacity: { duration: 0.2, delay: 0.3 } } }}
        transition={{ duration: 0.5 }}
        src={`${imgBaseUrl}${images[currentIndex]}`}
        className=' object-cover w-full h-full rounded-lg imgFocus'
        alt={`Image ${currentIndex}`}
      />
    </AnimatePresence>
  </div>
  )
}

export default HeroImgSwitcher
