import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'

const AddEvent = () => {
  return (
    <SectionBody>
      <div className='pb-5'>
        <SectionHeader 
          header='create Event'
          btnName='add'
          routePath='/admin/dashboard/events/add'
        />
      </div>   
    </SectionBody>
  )
}

export default AddEvent
