import Form from "../components/contactUs/Form"
import PageTransition from "../components/utility/motion/PageTransition"
import Subheader from "../components/utility/subHeaders/Subheader"
import styles from '../components/contactUs/contactUs.module.css'
import SEOPageHeader from "../components/utility/seo/SEOPageHeader"
import SEOPageDescription from "../components/utility/seo/SEOPageDescription"
import { useQuery } from "@tanstack/react-query"
import { getContent } from "../api/content/getContent"

const ContactUs = () => {
  const { data, isLoading, error} = useQuery(['contactus'], () => getContent({section: 'contactus'}))

  const contentArr = data?.data.data || []
  const contactusContent = contentArr[0]
  return (
    <PageTransition layout="layout">
      <div className="lg:mb-32">
        <SEOPageHeader 
          page="Contact Us"
        />
        <SEOPageDescription 
          desc='Unlock your true potential with Universal Mindfulness. Contact us today to start your journey towards self-discovery and personal growth. Learn how mindfulness can transform your life and help you achieve your goals.'
        />
        <Subheader header='Contact Us' />
        <section className="mt-8 lg:flex lg:gap-x-32 xl:gap-x-40 lg:mt-10">
          <div className="font-inter text-base leading-[1.70675rem] lg:flex-1 lg:mt-8 lg:text-lg xl:text-xl">
            <h3 className="font-inter text-[3.641rem] leading-[1.1] text-headerPrimary xl:text-[4rem]">Contact Us</h3>
            <p className="mt-[0.61rem]">Please feel free to contact us to discuss how Universal Mindfulness can help you.</p>
            {isLoading ? (
              <>
                <p className={`${styles.paraSpacing}`}>
                  <span className={`${styles.skeletonLoader} ${styles.emailSkeleton}`}></span>
                </p>
                <p className={`${styles.paraSpacing}`}>
                  <span className={`${styles.skeletonLoader} ${styles.phoneSkeleton}`}></span>
                </p>
              </>
            ) : error ? (
              <p className={`${styles.paraSpacing} ${styles.errorText}`}>{"something went wrong try again"}</p>
            ) : (
              contactusContent && (
                <>
                  <p className={`${styles.paraSpacing} ${styles.paraHighlight}`}>{contactusContent.title}</p>
                  <p className={`${styles.paraSpacing} ${styles.paraHighlight}`}>Tel: {contactusContent.body1}</p>
                </>
              )
            )}
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
