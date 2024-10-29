import FooterBottom from "./FooterBottom"
import FooterNewsLetter from "./FooterNewsLetter"
import FooterSocials from "./FooterSocials"
import { Link } from "react-router-dom"

const DesktopFooter = () => {

  return (
    <div className='max-w-[80%] w-[80%] mx-auto text-lg hidden lg:block'>
      <div className="flex items-start justify-between">
        <div>
          <FooterNewsLetter />
        </div>
        <ul className=" lg:flex lg:flex-col lg:gap-y-4">
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/whatweoffer'>What we offer</Link></li>
          <li><Link to='/events'>Events</Link></li>
          <li><Link to='/blog'>Mindfulness Blog</Link></li>
          <li><Link to='/shop'>Shops</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        </ul>
        <FooterSocials />
      </div>
      <FooterBottom />
    </div>
  )
}

export default DesktopFooter
