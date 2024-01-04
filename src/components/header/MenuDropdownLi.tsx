import { navLi } from '../../types/navTypes'
import { Link } from 'react-router-dom'
import { useMenuStore } from '../../store/useMenuStore'
const MenuDropdownLi = ({ name, href, }: navLi) => {
  const { toggleMenu, setHasInteracted, toggleDropdown } = useMenuStore()
  const closeModal = () => {
    setHasInteracted(false)
    toggleMenu()
    toggleDropdown()
  }
  return (
    <li className=" border-b pb-[0.8rem] border-b-navLiBorder lg:pb-0 lg:border-b-0 select-none">
      <Link to={href} onClick={closeModal}>
        <h3 className={`relative w-fit z-[2] capitalize $ font-semibold`}>
          {name}
        </h3>
      </Link>
    </li>
  )
}

export default MenuDropdownLi
