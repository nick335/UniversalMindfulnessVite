import Subheader from '../../utility/subHeaders/Subheader'
import Service from './Service'
import { motion, useAnimation } from "framer-motion";
import data from './serviceData';
import { useState, useRef, useEffect } from 'react';
// import chevronRight from '../../../assets/utilty/icons/chevron-right.svg'



const OurServices = () => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentChildIndex, setCurrentChildIndex] = useState(0);
  const parentRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const parentVariants = {
      hidden: {
        opacity: 0,
      },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.3, 
        },
      },
    }

    const handleChildComplete = () => {
      const nextChildIndex = currentChildIndex + 1;
      setCurrentChildIndex(nextChildIndex);
  
      const nextChildRef = parentRef.current ? parentRef.current.children[nextChildIndex] : null;
  
      if (nextChildRef) {
        controls.start("show");
      }
    };
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsPlaying(true);
            controls.start("show");
          } else {
            setIsPlaying(false);
            controls.stop();
          }
        },
        { threshold: 0.3 }
      );
  
      if (parentRef.current) {
        observer.observe(parentRef.current);
      }
  
      return () => observer.disconnect();
    }, [controls]);
  
  
  // const pauseAnimation = async () => {
  //   await controls.stop()
  // }
  // const resumeAnimation = async () => {
  //   await controls.start("show")
  // }
  const services = data.map((each, idx) => {
    return <Service 
            key={idx}
            img={each.img}
            header={each.header}
            para={each.para}
            isVisible={isPlaying && idx === currentChildIndex}
            controls={controls}
            onComplete={handleChildComplete}
          />
  })
  
  // const items = [1,2,3,4 ]
  // const listItem = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1 }
  // };
  return (
    <section className='mt-[2.92rem] lg:mt-16'>
        <Subheader header='our services' />
        <motion.div ref={parentRef} variants={parentVariants} initial="hidden" animate={controls} exit="hidden" className='xsm:grid xsm:grid-cols-2 xsm:gap-x-6 md:gap-x-12 lg:gap-x-16 xl:gap-x-20' >
          {services}
        </motion.div>
    </section>
  )
}

export default OurServices
