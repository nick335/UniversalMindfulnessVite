import ChildrenTestimonial from "../components/testimonials/ChildrenTestimonial"
import MainTestimonial from "../components/testimonials/MainTestimonial"
import ParentTestimonials from "../components/testimonials/ParentTestimonials"
import PageTransition from "../components/utility/motion/PageTransition"
import SEOPageDescription from "../components/utility/seo/SEOPageDescription"
import SEOPageHeader from "../components/utility/seo/SEOPageHeader"
import FetchSubHeader from "../components/utility/subHeaders/FetchSubHeader"
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
      <FetchSubHeader 
        page='testimonial'
        value='testimonial'
        max='44.75'
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
