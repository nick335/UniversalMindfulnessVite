import cart from '../../assets/utilty/icons/cart.svg'
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Menu from './Menu';
import { useMenuStore } from '../../store/useMenuStore';
import { useCartStore } from '../../store/useCartStore';
import { useEffect } from 'react';

const Nav = () => {
  const {  toggleMenu, isOpen} = useMenuStore()
  const { noOfCartItem, toggleCart } = useCartStore()

  useEffect(() => {
    const handleBodyScroll = () => {
      const screenWidth = window.innerWidth;
      const shouldHideBody = isOpen && screenWidth <= 1024;

      document.body.style.overflow = shouldHideBody ? 'hidden' : 'auto';
    };

    // Call the function on mount
    handleBodyScroll();

    // Attach the function to the resize event to update the scroll behavior dynamically
    window.addEventListener('resize', handleBodyScroll);

    // Clean up: remove the event listener when the component is unmounted
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('resize', handleBodyScroll);
    };
  }, [isOpen])

  return (
    <nav className=' sticky top-0 bg-bgNav navLayout py-6 rounded-[0.459rem] flex items-center justify-between  z-20 lg:rounded-none mt-[1.38rem] lg:mt-10 font-lato text-textSecondary'>
      <div className='w-fit h-fit lg:hidden' onClick={toggleMenu}>
       <IoIosMenu className='text-textPrimary w-[1.418rem] h-[1.418rem]' /> 
      </div>
      <div className='w-fit h-fit hidden lg:block' onClick={toggleMenu}>
       <IoIosSearch className='text-textPrimary w-[1.418rem] h-[1.418rem]' /> 
      </div>
      
      <Menu />
      <div className='flex items-center gap-x-1 text-textPrimary'>
        <h3 className='font-semibold'>({noOfCartItem})</h3>
        <img src={cart} alt='cart' className='object-fit w-[1.37694rem] h-[1.37694rem]' onClick={toggleCart} />
      </div>
    </nav>
  )
}

export default Nav
