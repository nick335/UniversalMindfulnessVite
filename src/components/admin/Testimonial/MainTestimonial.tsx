import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import MainTestimonialContent from './MainTestimonialContent'
import { useQuery } from '@tanstack/react-query'
import { getContent } from '../../../api/content/getContent'
import { testimonialResponseType } from '../../../types/api/response'
import { nanoid } from 'nanoid'
import AdminContentLoader from '../../utility/Loader/AdminContentLoader'
import ErrorMessage2 from '../../utility/Error/ErrorMessage2'
import NoContent from '../../utility/admin/contentdisplay/NoContent'

const MainTestimonial = () => {
  const { data, isLoading, error} = useQuery(['mainTestimonial'], () => getContent({section: 'mainTestimonial'}))

  const content: testimonialResponseType[] = data?.data.data || []

  const contentDisplay = content.map((each) => {
    return <MainTestimonialContent 
              key={nanoid()}
              img={each.link1}
              name={each.title}
              caption={each.header}
              body={each.body1}
            />
  })
  return (
    <SectionBody>
      <SectionHeader 
        header='Main Testimonial'
        btnName='Edit'
        routePath='admin/dashboard/testimonial/edit'
      />
      {
        isLoading ? <AdminContentLoader /> : error ? <ErrorMessage2 error={error} />: contentDisplay.length === 0 ? <NoContent /> : contentDisplay
      }
    </SectionBody>
  )
}

export default MainTestimonial
