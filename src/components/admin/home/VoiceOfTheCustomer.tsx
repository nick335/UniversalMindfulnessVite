import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import ContentDisplay1 from '../../utility/admin/contentdisplay/ContentDisplay1'

const VoiceOfTheCustomer = () => {
  return (
    <SectionBody>
      <SectionHeader 
        header='voice of the customer'
        btnName='add'
      />
      <div className='grid grid-cols-3 mt-10 gap-10'>
        <ContentDisplay1 />
        <ContentDisplay1 />
        <ContentDisplay1 />
      </div>
    </SectionBody>
  )
}

export default VoiceOfTheCustomer
