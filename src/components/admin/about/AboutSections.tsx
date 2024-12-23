import { useQuery } from "@tanstack/react-query"
import { getContent } from "../../../api/content/getContent"
import ContentDisplay6 from "../../utility/admin/contentdisplay/ContentDisplay6"
import AboutGallery from "./AboutGallery"
import { aboutSectionResponseType } from "../../../types/api/response"
import { nanoid } from "nanoid"
import AdminContentLoader from "../../utility/Loader/AdminContentLoader"
import ErrorMessage2 from "../../utility/Error/ErrorMessage2"
import NoContent from "../../utility/admin/contentdisplay/NoContent"
import AddAboutUs from "./AddAboutUs"


const AboutSections = () => {
  const { data, isLoading, error } = useQuery(['about'], () => getContent({
    section: 'about'
  }))

  const content: aboutSectionResponseType[] = data?.data.data || []

  const contentDisplay = content.map((each) => {
    return <ContentDisplay6 
              key={nanoid()}
              id={each.id}
              title={each.title}
              body={each.body1}
              img={each.link1}
              routePath={'/admin/dashboard/about/edit/'}
              section={each.section}
          />
  })
  return (
    <div className="adminSectionsGridLayout">
      <AddAboutUs />
      {
        isLoading ? <AdminContentLoader /> : error ? <ErrorMessage2 error={error} /> : contentDisplay.length === 0 ? <NoContent /> : contentDisplay
      }
      <AboutGallery />
    </div>
  )
}

export default AboutSections
