import { motion } from "framer-motion"
import { ReactNode } from "react"

interface props {
  children: ReactNode
}

const PageTransition = ({ children }: props) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="mt-[2.29rem] text-textSecondary mx-4  lg:w-[90%] lg:mx-auto"
    >
      {children}
    </motion.main>
  )
}

export default PageTransition
