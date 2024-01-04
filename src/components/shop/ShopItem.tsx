import { Link } from 'react-router-dom'
import bracelet from '../../assets/shop/bracelet.png'

const ShopItem = () => {
  return (
    <div className='mb-8'>
      <img src={bracelet} alt='shopItem' className='object-fill w-full rounded-[0.45438rem] cursor-pointer aspect-[1/1.3]' />
      <h5 className='mt-[0.77rem] lg:mt-[0.81rem] uppercase font-inter text-2xl leading-[0.77813rem] tracking-[-0.02331rem]'>
        <Link to='/shop/bracelet'>Bracelet</Link> 
      </h5>
      <p className='mt-[0.44rem]'>$80.00</p>
    </div>
  )
}

export default ShopItem
