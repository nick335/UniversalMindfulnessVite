import ContentDisplay3 from "../components/utility/admin/contentdisplay/ContentDisplay3"
import SectionHeader from "../components/utility/admin/header/sectionHeader"
import SectionBody from "../components/utility/admin/section/sectionBody"


const AdminMeetTheTeam = () => {
  return (
    <div className="pb-12">
      <SectionBody>
        <SectionHeader 
          header="meet the team"
          btnName="add"
        />
        <div className="adminGridLayout1">
          <ContentDisplay3 />
          <ContentDisplay3 />
          <ContentDisplay3 />
          <ContentDisplay3 />
          <ContentDisplay3 />
        </div>
      </SectionBody>
    </div>
  )
}

export default AdminMeetTheTeam
