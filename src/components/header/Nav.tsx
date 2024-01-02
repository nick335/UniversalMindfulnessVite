import cart from '../../assets/utilty/icons/cart.svg'
import { IoIosMenu } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import Menu from './Menu';
import { useMenuStore } from '../../store/useMenuStore';
import { useCartStore } from '../../store/useCartStore';

const Nav = () => {
  const {  toggleMenu} = useMenuStore()
  const { noOfCartItem, toggleCart } = useCartStore()
  return (
    <nav className='bg-bgNav navLayout py-6 rounded-[0.459rem] flex items-center justify-between sticky top-0 left-0 z-20 lg:rounded-none'>
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
