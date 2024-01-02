import demoImg from '../../assets/shop/bracelet.png'
const CartItem = () => {
  return (
    <div className='flex gap-x-4 pb-[0.56rem] border-b'>
      <div className='w-full max-h-full aspect-[1/1.5] flex-1'>
        <img src={demoImg} alt='bracelet' className='object-fill w-full h-full' />
      </div>
      <div className='mt-[0.69rem] flex-[1.8]'> 
        <h3 className='font-inter text-sm capitalize leading-[1.0205rem]'>Lucky Bracelet with Happiness Charm</h3>
        <p className='mt-[0.46rem] text-headerPrimary font-bold leading-[0.60375rem]'>£750</p>
        <div className='flex justify-between items-center mt-5'>
          <div className='flex items-center border rounded-[0.2815rem] py-2 px-4 gap-x-4 text-[0.63344rem] leading-[0.60375rem]'>
            <h3>+</h3>
            <h3>1</h3>
            <h3>-</h3>
          </div>
          <p className='underline text-[0.63344rem] tracking-[0.00969rem] leading-[0.60375rem]'>Remove Item</p>
        </div>
      </div>
    </div>
  )
}

export default CartItem
