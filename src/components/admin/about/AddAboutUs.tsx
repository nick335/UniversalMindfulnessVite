
import SectionHeader from '../../utility/admin/header/sectionHeader'
import SectionBody from '../../utility/admin/section/sectionBody'

const AddAboutUs = () => {
  return (
    <SectionBody>
      <div className='pb-5'>
        <SectionHeader 
          header='create an about us section'
          btnName='add'
          routePath='/admin/dashboard/aboutus/add'
          secondaryBtnName='Rearrange sections'
          secondaryRoutePath='/admin/dashboard/about/rearrange'
        />
      </div>  
    </SectionBody>
  )
}

export default AddAboutUs
