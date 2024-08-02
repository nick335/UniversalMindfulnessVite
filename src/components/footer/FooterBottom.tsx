import { Link } from "react-router-dom"

const FooterBottom = () => {
  return (
    <div className='flex flex-col items-center text-sm gap-y-4 text-center lg:flex-row-reverse lg:justify-between lg:mt-20'>
      <div className='flex flex-col items-center gap-y-4 lg:flex-row gap-x-6'>
        <h5><Link to='/privacy-policy'>Privacy Policy</Link></h5>
      </div>
      <p>© Universal Mindfulness Inc. All rights reserved.</p>
    </div>
  )
}

export default FooterBottom
