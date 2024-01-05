import Subheader from '../../utility/subHeaders/Subheader'
import Service from './Service'
import { motion } from "framer-motion";
import data from './serviceData';
// import chevronRight from '../../../assets/utilty/icons/chevron-right.svg'



const OurServices = () => {
  const services = data.map((each, idx) => {
    return <Service 
            key={idx}
            img={each.img}
            header={each.header}
            para={each.para}
          />
  })
  const parentVariants = {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 3, 
      },
    },
  }
  // const items = [1,2,3,4 ]
  // const listItem = {
  //   hidden: { opacity: 0 },
  //   show: { opacity: 1 }
  // };
  return (
    <section className='mt-[2.92rem] lg:mt-16'>
        <Subheader header='our services' />
        <motion.div variants={parentVariants} initial="hidden" animate="show" exit="hidden" className='xsm:grid xsm:grid-cols-2 xsm:gap-x-6 md:gap-x-12 lg:gap-x-16 xl:gap-x-20' >
          {/* {items.map((each) => {
            return <motion.div key={each} variants={listItem} className='w-40 h-40 bg-red-50'>{each}</motion.div>
          })} */}
          {services}
        </motion.div>
    </section>
  )
}

export default OurServices
