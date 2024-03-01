import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import ContentDisplay1 from '../../utility/admin/contentdisplay/ContentDisplay1'
import { getContent } from '../../../api/content/getContent'
import { useQuery } from "@tanstack/react-query"
import { testimonialResponseType } from '../../../types/api/response'
import { nanoid } from 'nanoid'
import AdminContentLoader from '../../utility/Loader/AdminContentLoader'
import NoContent from '../../utility/admin/contentdisplay/NoContent'
import ErrorMessage2 from '../../utility/Error/ErrorMessage2'
const Children = () => {
  const { data, isLoading, error } = useQuery(['childrenTestimonial'], () => getContent({section: 'childrenTestimonial'}))

  const contentArr: testimonialResponseType[] = data?.data.data || []

  const contentDisplay = contentArr.map((each) => {
    return <ContentDisplay1 
            key={nanoid()}
            id={each.id}
            title={each.title}
            header={each.header}
            body1={each.body1}
            link1={each.link1}
            section={each.section}
            routePath={`/admin/dashboard/testimonial/children/edit/${each.id}`}
          />
  })

  if(error) return <ErrorMessage2 error={error} />
  return (
    <SectionBody>
      <SectionHeader 
        header='children testimonial'
        btnName='add'
        routePath='/admin/dashboard/testimonial/children/add'
      />
      <div className='adminGridLayout1'>
        {
          isLoading ? <AdminContentLoader /> : contentDisplay.length  === 0 ? <NoContent /> : contentDisplay
        }
      </div>
    </SectionBody>
  )
}

export default Children
