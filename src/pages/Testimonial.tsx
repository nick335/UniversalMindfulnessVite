import ChildrenTestimonial from "../components/testimonials/ChildrenTestimonial"
import MainTestimonial from "../components/testimonials/MainTestimonial"
import ParentTestimonials from "../components/testimonials/ParentTestimonials"
import PageTransition from "../components/utility/motion/PageTransition"
import SEOPageDescription from "../components/utility/seo/SEOPageDescription"
import SEOPageHeader from "../components/utility/seo/SEOPageHeader"
import PageHeaderSection from "../components/utility/subHeaders/PageHeaderSection"
import Subheader from "../components/utility/subHeaders/Subheader"

const Testimonial = () => {
  return (
    <PageTransition layout="layout">
      <SEOPageHeader 
        page="Testimonials"
      />
      <SEOPageDescription 
        desc="Unlock the power of mindfulness with Universal Mindfulness. Hear inspiring testimonials from individuals who have discovered their true potential through our transformative practices. Start your journey today and experience the life-changing benefits for yourself."
      />
      <Subheader header="Testimonials" />
      <PageHeaderSection
        para="We offer a hand, a toolkit, and a supportive community to help you navigate the messy masterpiece of life. But don't just take our word for it." 
        header="Voices from people like you."
        max="44.75"
      />
      <section className="mt-10 lg:mt-12">
        <MainTestimonial />
      </section>
      <ChildrenTestimonial />
      <ParentTestimonials />
    </PageTransition> 
  )
}

export default Testimonial
