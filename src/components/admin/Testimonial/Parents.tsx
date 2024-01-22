import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import ContentDisplay1 from '../../utility/admin/contentdisplay/ContentDisplay1'
const Parents = () => {
  return (
    <SectionBody>
      <SectionHeader 
        header='parent testimonial'
        btnName='add'
        routePath='admin/dashboard/testimonial/parent/add'
      />
      <div className='grid grid-cols-3 mt-10 gap-10'>
        <ContentDisplay1 />
        <ContentDisplay1 />
        <ContentDisplay1 />
      </div>
    </SectionBody>
  )
}

export default Parents
