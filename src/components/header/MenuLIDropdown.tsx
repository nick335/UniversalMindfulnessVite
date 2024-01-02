import { useMenuStore } from "../../store/useMenuStore";
import MenuLI from "./MenuLI"
import { IoIosArrowDown } from "react-icons/io";

const MenuLIDropdown = () => {
  const {  aboutDropdown, toggleDropdown, hasInteracted, setHasInteracted} = useMenuStore()


  const handleDropdownClick = () => {
    toggleDropdown();
    setHasInteracted(true);
  };
  return (
    <div className={`flex flex-col gap-y-[1.12rem] font-semibold text-xl text-headerSecondary h-[2.6125rem]  overflow-hidden ${hasInteracted ? (aboutDropdown ? 'animate-dropDownAni' : 'animate-goBackUpAni') : ''} lg:animate-none lg:text-textPrimary lg:h-fit lg:relative lg:text-base lg:overflow-visible`}>
      <div className="border-b border-b-navLiBorder pb-[0.8rem] flex items-center justify-between lg:pb-0 lg:border-b-0 lg:gap-x-2 cursor-pointer" onClick={handleDropdownClick}>
        <h3>About</h3>
        <IoIosArrowDown className={`transition-all ease-in duration-300 ${aboutDropdown ? 'rotate-90' : ''} `}/>
      </div>
      <ul className={`pl-4 flex flex-col gap-y-[1.12rem] font-semibold text-xl text-headerSecondary lg:absolute lg:bg-white lg:top-7 lg:-left-1 lg:min-w-[6rem] lg:shadow-lg lg:rounded-md  lg:text-base lg:gap-y-2 lg:px-3 lg:py-3 ${ aboutDropdown ? 'lg:flex' : 'lg:hidden' }`}>
        <MenuLI 
          name='About Us'
          href='/about'
        />
        <MenuLI 
          name='Our Team'
          href="/meettheteam"
        />
      </ul>
    </div>
  )
}

export default MenuLIDropdown
