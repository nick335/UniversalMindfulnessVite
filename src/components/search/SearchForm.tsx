import { FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSearchStore } from "../../store/useSearchStore";
import { useRef, useEffect } from "react";

const SearchForm = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const { toggleSearchVisibility } = useSearchStore()
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  useEffect(() => {
    // Focus the input field when the component mounts
    inputRef.current?.focus();
  }, []);
  return (
    <motion.div
      initial={{ y: 150}}
      animate={{y: 0}}
      className=" w-[80%] max-w-[28.75rem]" 
      onClick={stopPropagation}>
      <div className="w-fit h-fit ml-auto" onClick={toggleSearchVisibility}>
        <FaTimes className="text-white lg:hover:text-headerSecondary cursor-pointer transition-all duration-150 ease-in-out" />
      </div>
      
      <div className=" my-2.5 ">
        <input ref={inputRef} placeholder="search keywords?" type='text' className="w-full p-3.5 outline-none text-sm rounded-[2px]" />
      </div>
      <p className="text-center text-white text-[0.9375rem]">*Type a keyword then press enter</p>
    </motion.div>
  )
}

export default SearchForm
