
import FooterBottom from './FooterBottom'
import FooterNewsLetter from './FooterNewsLetter'
import FooterSocials from './FooterSocials'

const MobileFooter = () => {
  return (
    <div className='text-sm flex flex-col gap-y-4'>
      <ul className='text-center flex flex-col gap-y-4'>
        <li>About</li>
        <li>Solutions</li>
      </ul>
      <FooterSocials />
      <ul className='text-center flex flex-col gap-y-4'>
        <li>Events</li>
        <li>Mindfulness Blog</li>
        <li>Shops</li>
        <li>Contact</li>
      </ul>
      <FooterNewsLetter />
      <FooterBottom />
    </div>
  )
}

export default MobileFooter
