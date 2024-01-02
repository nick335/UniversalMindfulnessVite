import { Link } from 'react-router-dom'
import cartClose from '../../assets/utilty/icons/cartClose.svg'
import EmptyCart from './EmptyCart'
import CartItem from './CartItem'
import { useCartStore } from '../../store/useCartStore'
const CartModal = () => {
  const { toggleCart, isCartOpen, noOfCartItem } = useCartStore()
  const isEmpty = noOfCartItem === 0 ? true : false
  return (
    <div className={`h-screen w-screen max-h-screen overflow-scroll bg-white absolute z-[1000] top-0 left-0     ${ isCartOpen ? 'block lg:flex lg:justify-center lg:items-center' : 'hidden'} lg:bg-black/40`}>
      <div className="pt-[2.92rem] px-[1.8rem] lg:bg-white lg:max-w-[24rem] lg:min-w-[24rem] lg:max-h-[30.96775rem] lg:min-h-[80%] lg:overflow-y-auto">
        <div className='pb-[0.84rem] border-b flex justify-between items-center'>
          <h3 className='text-[1.12613rem] font-semibold text-headerPrimary'>Your Cart</h3>
          <img src={cartClose} alt='close' className='object-fill w-[1.3rem] h-[1.3rem]' onClick={toggleCart}/>
        </div>
        <div className='mt-[0.84rem] min-h-32 flex flex-col items-center justify-center gap-y-[0.56rem]'>

          {
            isEmpty ? <EmptyCart /> 
                      : 
                      <>
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      <CartItem />
                      </>
          }
        </div>
        <button className='btn mt-6 h-[3.4375rem] w-full text-textPrimary font-semibold text-sm '>Continue To checkout</button>
        <h4 className='mt-[1.83rem] text-headerSecondary text-center'>
          <Link to={'/shop'}>Continue to Shopping</Link>
        </h4>
      </div>
    </div>
  )
}

export default CartModal
