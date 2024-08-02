import { useLocation } from "react-router-dom";
import { useMenuStore } from "../../store/useMenuStore";
import MenuDropdownLi from "./MenuDropdownLi";
import { IoIosArrowDown } from "react-icons/io";
import LinkActive from "./LinkActive";
import { useRef } from "react";
import useWindowDimensions from "../../hooks/UseWindowDimensions";

const MenuLIDropdown = () => {
  const { width } = useWindowDimensions()
  const {  aboutDropdown, toggleDropdown, hasInteracted, setHasInteracted, setIsDropdownOpen} = useMenuStore()
  const pathname = useLocation().pathname
  const dropdownRef = useRef(null);
  const active = pathname === '/about' || pathname ===  '/meettheteam' ? true : false



  const handleDropdownClick = () => {
    toggleDropdown();
    setHasInteracted(true);
  };
  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
    setHasInteracted(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setHasInteracted(true);
  };
  return (
    <div className={`flex flex-col gap-y-[1.12rem] font-semibold text-xl text-headerSecondary h-[2.6125rem]  overflow-hidden ${hasInteracted ? (aboutDropdown ? 'animate-dropDownAni' : 'animate-goBackUpAni') : ''} lg:animate-none lg:text-textPrimary lg:h-fit lg:relative lg:text-base lg:overflow-visible`}>
      <div className="border-b border-b-navLiBorder pb-[0.8rem] flex items-center justify-between lg:pb-0 lg:border-b-0 lg:gap-x-2 cursor-pointer" onClick={handleDropdownClick} ref={dropdownRef} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <h3 className={`relative w-fit z-[2] capitalize ${active ? 'font-bold' : 'font-semibold'}`}>
          about
          { active && <LinkActive />}
        </h3>
        <IoIosArrowDown className={`transition-all ease-in duration-300 ${aboutDropdown ? 'rotate-90' : ''} `}/>
      </div>
      <ul className={`pl-4 flex flex-col gap-y-[1.12rem] font-semibold text-xl text-headerSecondary lg:absolute lg:bg-white lg:top-7 lg:-left-1 lg:min-w-[6rem] lg:shadow-lg lg:rounded-md  lg:text-base lg:gap-y-2 lg:px-3 lg:py-3 ${ aboutDropdown ? 'lg:flex' : 'lg:hidden' }`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <MenuDropdownLi 
          name='About Us'
          href='/about'
        />
        <MenuDropdownLi 
          name='Our Team'
          href="/meettheteam"
        />
        <MenuDropdownLi 
          name="Testimonials"
          href="/testimonials"
        />
      </ul>
    </div>
  )
}

export default MenuLIDropdown
