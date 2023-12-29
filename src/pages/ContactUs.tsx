import Form from "../components/contactUs/Form"
import PageTransition from "../components/utility/motion/PageTransition"
import Subheader from "../components/utility/subHeaders/Subheader"
import styles from '../components/contactUs/contactUs.module.css'

const ContactUs = () => {
  return (
    <PageTransition>
      <div className="lg:mb-32">
        <Subheader header='Contact Us' />
        <section className="mt-8 lg:flex lg:gap-x-32 xl:gap-x-40 lg:mt-10">
          <div className="font-inter text-base leading-[1.70675rem] lg:flex-1 lg:mt-8 lg:text-lg xl:text-xl">
            <h3 className="font-inter text-[3.641rem] leading-[1.1] text-headerPrimary xl:text-[4rem]">Contact Us</h3>
            <p className="mt-[0.61rem]">Please feel free to contact us to discuss how Universal Mindfulness can help you.</p>
            <p className={`${styles.paraSpacing} ${styles.paraHighlight}`}>info@universalmindfulness.co.uk</p>
            <p className={`${styles.paraSpacing} ${styles.paraHighlight}`}>Tel: 07967 412047</p>
            <p className={`${styles.paraSpacing}`}>We’ll get back to you asap.</p>
            <p className={`${styles.paraSpacing}`}>Want to know more about our platform?</p>
          </div>
          <Form />
        </section>
      </div>
    </PageTransition>
  )
}

export default ContactUs
