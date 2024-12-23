import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'

const AddWhatWeOffer = () => {
  return (
    <SectionBody>
      <div className='pb-5'>
        <SectionHeader 
          header='create What We Offer'
          btnName='add'
          routePath='/admin/dashboard/whatweoffer/add'
        />
      </div>   
    </SectionBody>
  )
}

export default AddWhatWeOffer
