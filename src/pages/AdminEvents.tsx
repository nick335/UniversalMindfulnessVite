import { useQuery } from "@tanstack/react-query"
import AddEvent from "../components/admin/event/AddEvent"
import ContentDisplay2 from "../components/utility/admin/contentdisplay/ContentDisplay2"
import { getContent } from "../api/content/getContent"
import { eventResponseType } from "../types/api/response"
import { nanoid } from "nanoid"
import AdminContentLoader from "../components/utility/Loader/AdminContentLoader"
import NoContent from "../components/utility/admin/contentdisplay/NoContent"

const AdminEvents = () => {
  const { data, isLoading } = useQuery(['events'], () => getContent({section: 'event'}))

  const contentArr: eventResponseType[] = data?.data.data || []

  const contentDisplay = contentArr.map((each) => {
    return <ContentDisplay2 
            key={nanoid()}
            id={each.id}
            body1={each.body1}
            link1={each.link1}
            title={each.title}
          />
  })

  return (
    <div className="adminSectionsGridLayout">
      <AddEvent />
      
      {
        isLoading ? <AdminContentLoader /> : contentDisplay.length  === 0 ? <NoContent /> : contentDisplay
      }
    </div>
  )
}

export default AdminEvents
