import { motion } from "framer-motion";
import { useRef } from 'react'
import { Link } from 'react-router-dom';
import { useHover } from 'usehooks-ts'
import imgBaseUrl from "../../../store/ImgBaseUrl";
import formatDate from "../../../utilsFunction/FormatDate";

interface props {
  img: string
  createdAt: string,
  title: string
  id: number
}

const Blog = ({ img, createdAt, title, id }: props) => {
  const formattedDate = formatDate(createdAt)
  const hoverRef = useRef(null)
  const isHover = useHover(hoverRef)

  const imageVariants = {
    normal: { scale: 1 },
    hovered: { scale: 1.1 },
  };

  const overlayVariants = {
    normal: { opacity: 0 },
    hovered: { opacity: 0.5 },
  };

   return (
    <div className="font-inter">
      <motion.div className='w-full aspect-square relative overflow-hidden rounded-xl cursor-pointer'
        ref={hoverRef}
      >
        <motion.img src={`${imgBaseUrl}${img}`} className='imgFocus object-cover w-full h-full rounded-xl' variants={imageVariants} initial='normal' transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }} animate={isHover ? 'hovered': 'normal'} />
        <motion.div variants={overlayVariants} initial='normal' animate={isHover ? 'hovered': 'normal'} transition={{ duration: 0.5, ease: [0.645, 0.045, 0.355, 1] }}  className=' absolute top-0 left-0 bg-black w-full h-full rounded-xl'></motion.div>
      </motion.div>
      <div className="flex flex-col gap-y-[0.84rem] w-[95%] mt-8">
        <h3 className='text-headerPrimary font-semibold text-[1.61344rem] leading-[2.17388rem]'>{title}</h3>
        <h4 className='text-[0.79694rem] '>{formattedDate}</h4>
        <button className='btn h-[3.4375rem] lg:h-[3.28972rem] text-textPrimary font-lato w-full lg:max-w-[8.80056rem]'><Link to={`/blog/${id}`}>Read More</Link></button>
      </div>  
    </div>
  )
}

export default Blog
