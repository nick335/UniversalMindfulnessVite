import { motion } from "framer-motion"
import { ReactNode } from "react"

interface props {
  children: ReactNode,
  layout: string
}

const PageTransition = ({ children, layout }: props) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`mt-[2.29rem] text-textSecondary  ${layout} `}
    >
      {children}
    </motion.main>
  )
}

export default PageTransition
