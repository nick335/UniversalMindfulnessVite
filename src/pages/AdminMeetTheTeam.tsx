import ContentDisplay3 from "../components/utility/admin/contentdisplay/ContentDisplay3"
import SectionHeader from "../components/utility/admin/header/sectionHeader"
import SectionBody from "../components/utility/admin/section/sectionBody"
import { getContent } from "../api/content/getContent"
import { useQuery } from "@tanstack/react-query"
import { teamResponseType } from "../types/api/response"
import { nanoid } from "nanoid"
import AdminContentLoader from "../components/utility/Loader/AdminContentLoader"
import NoContent from "../components/utility/admin/contentdisplay/NoContent"

const AdminMeetTheTeam = () => {
  const { data, isLoading } = useQuery(['team'], () => getContent({section: 'team'}))

  const contentArr: teamResponseType[] = data?.data.data || []

  const contentDisplay = contentArr.map((each) => {
    return <ContentDisplay3
            key={nanoid()}
            id={each.id}
            title={each.title}
            header={each.header}
            body1={each.body1}
            section={each.section}
            link1={each.link1}
          />
  })
  return (
    <div className="pb-12">
      <SectionBody>
        <SectionHeader 
          header="meet the team"
          btnName="add"
          routePath="/admin/dashboard/about/meettheteam/add"
        />
        <div className="adminGridLayout1">
          {
            isLoading ? <AdminContentLoader /> : contentDisplay.length  === 0 ? <NoContent /> : contentDisplay
          }
        </div>
      </SectionBody>
    </div>
  )
}

export default AdminMeetTheTeam
