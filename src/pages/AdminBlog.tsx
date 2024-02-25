import AddBlog from '../components/admin/blog/AddBlog'
import ContentDisplay4 from "../components/utility/admin/contentdisplay/ContentDisplay4"
import { getContent } from "../api/content/getContent"
import { useQuery } from "@tanstack/react-query"
import { blogResponseType, } from '../types/api/response'
import { nanoid } from 'nanoid'
import AdminContentLoader from '../components/utility/Loader/AdminContentLoader'
import NoContent from '../components/utility/admin/contentdisplay/NoContent'
import ErrorMessage2 from '../components/utility/Error/ErrorMessage2'

const AdminBlog = () => {
  const { data, isLoading, error  } = useQuery(['blogs'], () => getContent({section: 'blogs'}))
  const contentArr: blogResponseType[] = data?.data.data || []

  const contentDisplay = contentArr.map((each) => {
    return <ContentDisplay4 
            key={nanoid()}
            id={each.id}
            title={each.title}
            header={each.header}
            link1={each.link1}
            body1={each.body1}
            section={each.section}
            sub_section={each.sub_section}
          />
  })
  if(error) return <ErrorMessage2 error={error} />
  return (
    <div className="adminSectionsGridLayout">
      <AddBlog />
      {
        isLoading ? <AdminContentLoader /> : contentDisplay.length  === 0 ? <NoContent /> : contentDisplay
      }
    </div>
  )
}

export default AdminBlog;
