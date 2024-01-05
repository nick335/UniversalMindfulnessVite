import chevronRight from '../../../assets/utilty/icons/chevron-right.svg'
import { motion,AnimationControls } from "framer-motion";
import { useEffect } from 'react';

interface props {
  img: string,
  header: string,
  para: string,
  isVisible: boolean;
  controls: AnimationControls;
  onComplete: () => void;

}
const Service = ({img, header, para, isVisible, controls, onComplete}: props) => {
  console.log(isVisible, header)
  useEffect(() => {
    if (isVisible) {
      controls.start("show").then(onComplete);
    }
  }, [isVisible, controls, onComplete])
  const childVariants = {
    hidden: {
      scale: 0,
      opacity: 0
    },
    show: {
      scale: 1,
      opacity: 1,
    },
  };
  return (
    <motion.div variants={childVariants} transition={{ease: [0.645, 0.045, 0.355, 1], duration: 0.3}}   className=" mt-10 ">
      <div className='w-full aspect-video rounded-lg '>
        <img src={img} className='imgFocus object-cover shadow-service w-full h-full object-center rounded-lg '/>
      </div>
      <div className="text-center lg:mt-4 flex flex-col gap-y-[0.66rem] lg:gap-y-4">
        <h3 className="text-[1.64363rem] font-semibold text-headerPrimary lg:text-4xl">{header}</h3>
        <p className="text-[0.73963rem] font-medium lg:max-w-[27.8125rem] lg:mx-auto lg:text-lg">{para}</p>
        <button className='text-[0.73963rem] lg:text-lg font-medium underline flex items-center justify-center '>View More
          <span className='ml-1'>
            <img src={chevronRight} alt='icon' className='h-[0.98619rem] w-[0.98619rem] object-fill mt-1 lg:w-6 lg:h-6' />
          </span>
         </button>
      </div>
    </motion.div>
  )
}

export default Service
