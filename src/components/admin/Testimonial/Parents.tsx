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
const Parents = () => {
  const { data, isLoading, error } = useQuery(['parentTestimonial'], () => getContent({section: 'parentTest'}))

  const contentArr: testimonialResponseType[] = data?.data.data || []

  const contentDisplay = contentArr.map((each) => {
    return <ContentDisplay1 
            key={nanoid()}
            id={each.id}
            title={each.title}
            header={each.header}
            body1={each.body1}
            section={each.section}
            link1={each.link1}
          />
  })

  if(error) return <ErrorMessage2 error={error} />
  return (
    <SectionBody>
      <SectionHeader 
        header='parent testimonial'
        btnName='add'
        routePath='/admin/dashboard/testimonial/parent/add'
      />
      <div className='grid grid-cols-3 mt-10 gap-10'>
        {
          isLoading ? <AdminContentLoader /> : contentDisplay.length  === 0 ? <NoContent /> : contentDisplay
        }
      </div>
    </SectionBody>
  )
}

export default Parents
