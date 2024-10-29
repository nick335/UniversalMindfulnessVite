import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import { useQuery } from '@tanstack/react-query'
import { getContent } from '../../../api/content/getContent'
import AdminContentLoader from '../../utility/Loader/AdminContentLoader'
import ErrorMessage2 from '../../utility/Error/ErrorMessage2'
import { serviceResponseType } from '../../../types/api/response'
import ContentDisplay7 from '../../utility/admin/contentdisplay/ContentDisplay7'
import NoContent from '../../utility/admin/contentdisplay/NoContent'

const ServicesContainer = () => {
  const {  data, isLoading, error}  = useQuery(['services'], () => getContent({ section: 'services'}) )

  const services: serviceResponseType[] =  data?.data.data || []

  const servicesDisplay = services.map((each, idx) => {
    return <ContentDisplay7 
            key={idx}
            id={each.id}
            title={each.title}
            body1={each.body1}
            link1={each.link1}
            section={each.section}
            routePath={`/admin/dashboard/services/edit/${each.id}`}
          />
  }) 
  return (
    <SectionBody>
      <SectionHeader 
        header='Services'
        btnName='Add Service'
        routePath='/admin/dashboard/services/add'
      />
      <div className='adminGridLayout1'>
        {
          isLoading ? <AdminContentLoader /> : error ? <ErrorMessage2 error={error} /> : servicesDisplay.length === 0 ? <NoContent /> : servicesDisplay
        }
      </div>
    </SectionBody>
  )
}

export default ServicesContainer
