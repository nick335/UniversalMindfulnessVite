import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface props {
  children: ReactNode,
}

const SectionTransitionMotion = ({children}: props) => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, transition: {duration: 0.3, ease: [0.645, 0.045, 0.355, 1]} }}
    exit={{ opacity: 0, transition: {duration: 0.3, ease: [0.645, 0.045, 0.355, 1]} }}
    className='text-textSecondary'
    >
      {children}
    </motion.div>
  )
}

export default SectionTransitionMotion
