import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import MainTestimonialContent from './MainTestimonialContent'

const MainTestimonial = () => {
  return (
    <SectionBody>
      <SectionHeader 
        header='First Section Header Content'
        btnName='Edit'
      />

      <MainTestimonialContent />
    </SectionBody>
  )
}

export default MainTestimonial
