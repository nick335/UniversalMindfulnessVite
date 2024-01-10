import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
const FooterSocials = () => {
  return (
    <ul className='text-center flex flex-col gap-y-4'>
      <li>Connect</li>
      <ul className="flexCenter gap-x-8">
        <li className="cursor-pointer"><a href="https://web.facebook.com/universalmindfulness/"><FaFacebookF /></a></li>
        <li className="cursor-pointer"><a href="https://twitter.com/UniversalMind16"><FaTwitter /></a></li>
        <li className="cursor-pointer"><a href="https://www.linkedin.com/company/universal-mindfulness/"><FaLinkedinIn /></a></li>
      </ul>
      <li className="lg:hidden">What we offer</li>
      <li className=" opacity-65 ">info@narrablehealth.com</li>
    </ul>
  )
}

export default FooterSocials
