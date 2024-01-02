import CustomAboutAccordion from "../components/about/CustomAboutAccordion"
import PageTransition from "../components/utility/motion/PageTransition"
import PageHeaderSection from "../components/utility/subHeaders/PageHeaderSection"
import Subheader from "../components/utility/subHeaders/Subheader"

const About = () => {
  return (
    <PageTransition layout="none">
      <Subheader header='About Us' />
      <PageHeaderSection 
        header='The world’s destination for emotional intelligence'
        para="Mindfulness is a way of paying attention to, and seeing what is happening in our lives with clarity."
        max="41.75"
      />
      <section className="mt-[2.43rem]">
       <CustomAboutAccordion />
      </section>
    </PageTransition>
  )
}

export default About
