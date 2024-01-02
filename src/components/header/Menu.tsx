import { navLi } from "../../types/navTypes"
import MenuPopupModal from "../utility/modal/MenuPopupModal"
import MenuLI from "./MenuLI"
import MenuLIDropdown from "./MenuLIDropdown"
import { list1, list2 } from "./navData"


const Menu = () => {
  const list1El = list1.map((each: navLi, idx) => {
    return <MenuLI 
              key={idx}
              name={each.name}
              href={each.href}
            />
  })
  const listEL2 = list2.map((each, idx) => {
    return <MenuLI 
            key={idx}
            name={each.name}
            href={each.href}
           />
  })
  return (
       <MenuPopupModal>
        <ul className=" p-4 flex flex-col gap-y-[1.12rem] text-xl text-headerSecondary lg:text-textPrimary lg:flex-row lg:mx-auto lg:p-0 lg:gap-x-8 lg:text-base">
          {list1El}
          <MenuLIDropdown />
          {listEL2}
        </ul>
      </MenuPopupModal>
  )
}

export default Menu
