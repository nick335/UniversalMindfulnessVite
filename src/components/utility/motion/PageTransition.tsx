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
    >
      {children}
    </motion.main>
  )
}

export default PageTransition
