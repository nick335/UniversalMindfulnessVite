import SectionBody from '../components/utility/admin/section/sectionBody'
import SectionHeader from '../components/utility/admin/header/sectionHeader'

const AdminContact = () => {
  return (
    <SectionBody>
      <SectionHeader 
        header='Contact Us'
        btnName='Edit details'
      />
      <div className='font-inter mt-5 pb-8 leading-[1.4375rem] text-sm tracking-[-0.018rem]'>
        <h4>Phone:  087865565</h4>
        <h4  className='mt-2'>Email: info@universalmindfulness.co.uk </h4>
      </div>
    </SectionBody>
  )
}

export default AdminContact
