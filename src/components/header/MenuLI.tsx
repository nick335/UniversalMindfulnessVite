import { Link, useLocation } from 'react-router-dom'
import { useMenuStore } from '../../store/useMenuStore'
import LinkActive from './LinkActive'
import { navLi } from '../../types/navTypes'



const MenuLI = ({ name, href, }: navLi) => {
  const { toggleMenu, setHasInteracted } = useMenuStore()
  const pathName = useLocation().pathname
  const active  = pathName === href ? true : false
  const closeModal = () => {
    setHasInteracted(false)
    toggleMenu()
  }
  return (
    <li className=" border-b pb-[0.8rem] border-b-navLiBorder lg:pb-0 lg:border-b-0 select-none">
      <Link to={href} onClick={closeModal}>
        <h3 className={`relative w-fit z-[2] capitalize ${active ? 'font-bold' : 'font-semibold'}`}>
          {name}
          { active && <LinkActive />}
        </h3>
      </Link>
    </li>
  )
}

export default MenuLI
