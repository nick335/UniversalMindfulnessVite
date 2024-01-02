import FooterBottom from "./FooterBottom"
import FooterNewsLetter from "./FooterNewsLetter"
import FooterSocials from "./FooterSocials"
import FooterSponsorLogo from "./FooterSponsorLogo"

const DesktopFooter = () => {

  return (
    <div className='max-w-[80%] w-[80%] mx-auto text-sm hidden lg:block'>
      <div className="flex items-start justify-between">
        <div>
          <FooterNewsLetter />
          <FooterSponsorLogo />
        </div>
        <ul className=" lg:flex lg:flex-col lg:gap-y-4">
          <li>Solutions</li>
          <li>About</li>
          <li>What we offer</li>
          <li>Events</li>
          <li>MindFulness Blog</li>
          <li>Shop</li>
          <li>Contact</li>
        </ul>
        <FooterSocials />
      </div>
      <FooterBottom />
    </div>
  )
}

export default DesktopFooter
