import { useQuery } from "@tanstack/react-query"
import NoContent from "../components/utility/admin/contentdisplay/NoContent"
import { getContent } from "../api/content/getContent"
import { whatweofferSectionResponseType } from "../types/api/response"
import ContentDisplay6 from "../components/utility/admin/contentdisplay/ContentDisplay6"
import { nanoid } from "nanoid"
import AdminContentLoader from "../components/utility/Loader/AdminContentLoader"
import ErrorMessage2 from "../components/utility/Error/ErrorMessage2"
import AddWhatWeOffer from "../components/admin/whatweoffer/AddWhatWeOffer"

const AdminWhatWeOffer = () => {
  const { data, isLoading, error } = useQuery(['whatweoffer'], () => getContent({
    section: 'whatweoffer'
  }))
  const content: whatweofferSectionResponseType[] = data?.data.data || []

  const contentDisplay = content.map((each) => {
    return <ContentDisplay6 
              key={nanoid()}
              id={each.id}
              title={each.title}
              body={each.body1}
              img={each.link1}
              section={each.section}
              routePath={'/admin/dashboard/whatweoffer/edit/'}
           />
  })
  return (
    <div className='adminSectionsGridLayout'>
      <AddWhatWeOffer />
      {
        isLoading ? <AdminContentLoader /> : error ? <ErrorMessage2 error={error} /> : contentDisplay.length === 0 ? <NoContent /> : contentDisplay
      }
    </div>
  )
}

export default AdminWhatWeOffer
