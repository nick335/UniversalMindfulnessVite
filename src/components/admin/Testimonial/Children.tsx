import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import ContentDisplay1 from '../../utility/admin/contentdisplay/ContentDisplay1'

const Children = () => {
  return (
    <SectionBody>
      <SectionHeader 
        header='children testimonial'
        btnName='add'
        routePath='/admin/dashboard/testimonial/children/add'
      />
      <div className='adminGridLayout1'>
        <ContentDisplay1 />
        <ContentDisplay1 />
        <ContentDisplay1 />
      </div>
    </SectionBody>
  )
}

export default Children
