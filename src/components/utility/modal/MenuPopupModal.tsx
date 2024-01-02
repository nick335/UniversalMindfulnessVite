import { ReactNode } from "react"
import { useMenuStore } from "../../../store/useMenuStore"

interface props {
  children: ReactNode,
}

const MenuPopupModal = ({children}: props) => {
  const { isOpen, toggleMenu, setHasInteracted } = useMenuStore()
  const closeModal = () => {
    setHasInteracted(false)
    toggleMenu()
  }
  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  return (
    <div className={`h-screen w-screen z-50 bg-black/50 fixed top-0 left-0 ${ isOpen ? 'block' : 'hidden' } lg:static lg:block lg:bg-transparent lg:h-fit lg:w-fit lg:z-[1]`} onClick={closeModal}>
      <div className={`w-[60%] absolute -left-[60%] h-full bg-white ${ isOpen ? 'animate-[menuComeOut_0.3s_ease-in-out_0.1s_both]' : 'animate-[menuGoIn_0.5s_ease-in-out_both]'} lg:static lg:bg-transparent lg:animate-none lg:w-fit`} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  )
}

export default MenuPopupModal
