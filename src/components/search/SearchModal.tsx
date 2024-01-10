import { AnimatePresence } from "framer-motion"
import { useSearchStore } from "../../store/useSearchStore"
import SearchForm from "./SearchForm"
import { useEffect } from "react"

const SearchModal = () => {
  const { isSearchVisible, toggleSearchVisibility  } = useSearchStore()
  useEffect(() => {
    const handleBodyScroll = () => {
      const shouldHideBody = isSearchVisible

      document.body.style.overflow = shouldHideBody ? 'hidden' : 'auto';
    };

    // Call the function on mount
    handleBodyScroll();
  
  }, [isSearchVisible])
  
  return (
    <section className={`fixed top-0 left-0 w-full h-full z-30 bg-black/70 ${isSearchVisible ? 'flex' : 'hidden'} justify-center items-center font-lato`} onClick={toggleSearchVisibility}>
      <AnimatePresence>
        {
          isSearchVisible && <SearchForm />
        }
      </AnimatePresence>
    </section>
  )
}

export default SearchModal
