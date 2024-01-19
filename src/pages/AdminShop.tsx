import SectionBody from '../components/utility/admin/section/sectionBody'
import SectionHeader from '../components/utility/admin/header/sectionHeader'
import ContentDisplay5 from '../components/utility/admin/contentdisplay/ContentDisplay5'

const AdminShop = () => {
  return (
    <SectionBody>
      <SectionHeader 
        header='Shop'
        btnName='Add item'
      />
      <div className="adminGridLayout1">
        <ContentDisplay5 />
        <ContentDisplay5 />
        <ContentDisplay5 />
        <ContentDisplay5 />
      </div>
    </SectionBody>
  )
}

export default AdminShop
