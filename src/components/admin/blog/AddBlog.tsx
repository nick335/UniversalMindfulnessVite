import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'

const AddBlog = () => {
  return (
    <SectionBody>
      <div className='pb-5'>
        <SectionHeader 
          header='create Blog'
          btnName='add'
          routePath='/admin/dashboard/blog/add'
        />
      </div>   
    </SectionBody >
  )
}

export default AddBlog
