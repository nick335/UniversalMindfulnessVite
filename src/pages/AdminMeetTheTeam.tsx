import ContentDisplay3 from "../components/utility/admin/contentdisplay/ContentDisplay3"
import SectionHeader from "../components/utility/admin/header/sectionHeader"
import SectionBody from "../components/utility/admin/section/sectionBody"
import { getContent } from "../api/content/getContent"
import { useQuery } from "@tanstack/react-query"
import { teamResponseType } from "../types/api/response"
import { nanoid } from "nanoid"
import AdminContentLoader from "../components/utility/Loader/AdminContentLoader"
import NoContent from "../components/utility/admin/contentdisplay/NoContent"
import ErrorMessage2 from "../components/utility/Error/ErrorMessage2"
import EditHeaderComponent from "../components/admin/utility/EditHeaderComponent"

const AdminMeetTheTeam = () => {
  const { data, isLoading, error } = useQuery(['team'], () => getContent({section: 'team'}))

  const contentArr: teamResponseType[] = data?.data.data || []

  const contentDisplay = contentArr.map((each) => {
    return <ContentDisplay3
            key={nanoid()}
            id={each.id}
            title={each.title}
            header={each.header}
            body1={each.body1}
            link1={each.link1}
            section={each.section}
          />
  })
  if(error) return <ErrorMessage2 error={error} />
  return (
    <div className="pb-12">
      <div className="mb-6">
        <EditHeaderComponent page='meet the team' value="meettheteam" />
      </div>
      
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
