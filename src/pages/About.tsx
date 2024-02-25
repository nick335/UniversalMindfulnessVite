import { useQuery } from "@tanstack/react-query"
import { getContent } from "../api/content/getContent"
import AboutGallery from "../components/about/AboutGallery"
import CustomAboutAccordion from "../components/about/CustomAboutAccordion"
import DesktopAbout from "../components/about/DesktopAbout"
import PageTransition from "../components/utility/motion/PageTransition"
import SEOPageHeader from "../components/utility/seo/SEOPageHeader"
import PageHeaderSection from "../components/utility/subHeaders/PageHeaderSection"
import Subheader from "../components/utility/subHeaders/Subheader"
import useWindowDimensions from "../hooks/UseWindowDimensions"
import { aboutSectionResponseType } from "../types/api/response"
import AdminContentLoader from "../components/utility/Loader/AdminContentLoader"
import ErrorMessage3 from "../components/utility/Error/ErrorMessage3"

const About = () => {
  const { width }  = useWindowDimensions()
  const { isLoading, data, error } = useQuery(['about'], () => getContent({
    section: 'about'
  }))
  const content: aboutSectionResponseType[] = data?.data.data || []
  return (
    <PageTransition layout="none">
      <SEOPageHeader 
        page="About us"
      />
      <Subheader header='About Us' />
      <PageHeaderSection 
        header='The world’s destination for emotional intelligence'
        para="Mindfulness is a way of paying attention to, and seeing what is happening in our lives with clarity."
        max="41.75"
      />
      { isLoading ? 
      <div className="mt-[2.43rem] h-[50vh] flexCenter">
        <AdminContentLoader />
      </div> 
      : error ? <ErrorMessage3 error={error} /> :
      <section className="mt-[2.43rem]">
      { width < 1024 ? <CustomAboutAccordion data={content} /> : <DesktopAbout data={content} />}
      </section>
      }
      <section className="mx-4 mt-14"> 
        <AboutGallery />
      </section>
    </PageTransition>
  )
}

export default About
