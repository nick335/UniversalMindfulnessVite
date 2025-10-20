import Form from "../components/contactUs/Form"
import PageTransition from "../components/utility/motion/PageTransition"
import Subheader from "../components/utility/subHeaders/Subheader"
import styles from '../components/contactUs/contactUs.module.css'
import SEOPageHeader from "../components/utility/seo/SEOPageHeader"
import SEOPageDescription from "../components/utility/seo/SEOPageDescription"
import { useQuery } from "@tanstack/react-query"
import { getContent } from "../api/content/getContent"
import DOMPurify from "dompurify"

const ContactUs = () => {
  const { data, isLoading, error} = useQuery(['contactus'], () => getContent({section: 'contactus'}))

  const contentArr = data?.data.data || []
  const contactusContent = contentArr[0]
  const sanitizedBody = contactusContent ? DOMPurify.sanitize(contactusContent.body1 || '') : ''
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
            {isLoading ? (
              <div className={`${styles.paraSpacing}`}>
                <span className={`${styles.skeletonLoader} ${styles.bodySkeleton}`}></span>
                <span className={`${styles.skeletonLoader} ${styles.bodySkeleton}`}></span>
                <span className={`${styles.skeletonLoader} ${styles.bodySkeleton}`}></span>
              </div>
            ) : error ? (
              <p className={`${styles.paraSpacing} ${styles.errorText}`}>{"something went wrong try again"}</p>
            ) : (
              contactusContent && sanitizedBody ? (
                <div
                  className={`${styles.paraSpacing} text-base font-medium leading-[1.782rem] lg:text-lg`}
                  dangerouslySetInnerHTML={{ __html: sanitizedBody }}
                />
              ) : (
                <p className={`${styles.paraSpacing}`}>Please reach out via email or phone — we’ll get back to you as soon as possible.</p>
              )
            )}
          </div>
          <Form />
        </section>
      </div>
    </PageTransition>
  )
}

export default ContactUs
