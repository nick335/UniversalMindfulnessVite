import Subheader from '../../utility/subHeaders/Subheader'
import Service from './Service'

const OurServices = () => {
  return (
    <section className='mt-[2.62rem] lg:mt-16'>
        <Subheader header='our services' />
        <div className='xsm:grid xsm:grid-cols-2 xsm:gap-x-6 md:gap-x-12 lg:gap-x-16 xl:gap-x-20' >
          <Service />
          <Service />
          <Service />
          <Service />
        </div>
    </section>
  )
}

export default OurServices
