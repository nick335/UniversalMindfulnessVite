
import { Link } from 'react-router-dom'
import FooterBottom from './FooterBottom'
import FooterNewsLetter from './FooterNewsLetter'
import FooterSocials from './FooterSocials'

const MobileFooter = () => {
  return (
    <div className='text-base flex flex-col gap-y-4 lg:hidden'>
      <ul className='text-center flex flex-col gap-y-4'>
        <li><Link to='/about'>About</Link></li>
      </ul>
      <FooterSocials />
      <ul className='text-center flex flex-col gap-y-4'>
        <li><Link to='/events'>Events</Link></li>
        <li><Link to='/blog'>Mindfulness Blog</Link></li>
        <li><Link to='/shop'>Shops</Link></li>
        <li><Link to='/contactus'>Contact</Link></li>
      </ul>
      <FooterNewsLetter />
      <FooterBottom />
    </div>
  )
}

export default MobileFooter
