import CustomAboutAccordion from "../components/about/CustomAboutAccordion"
import DesktopAbout from "../components/about/DesktopAbout"
import PageTransition from "../components/utility/motion/PageTransition"
import PageHeaderSection from "../components/utility/subHeaders/PageHeaderSection"
import Subheader from "../components/utility/subHeaders/Subheader"
import useWindowDimensions from "../hooks/UseWindowDimensions"

const About = () => {
  const { width }  = useWindowDimensions()
  return (
    <PageTransition layout="none">
      <Subheader header='About Us' />
      <PageHeaderSection 
        header='The world’s destination for emotional intelligence'
        para="Mindfulness is a way of paying attention to, and seeing what is happening in our lives with clarity."
        max="41.75"
      />
      <section className="mt-[2.43rem]">
      { width < 1024 ? <CustomAboutAccordion /> : <DesktopAbout />}
      </section>
    </PageTransition>
  )
}

export default About
