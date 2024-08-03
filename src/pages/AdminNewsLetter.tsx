import SectionBody from '../components/utility/admin/section/sectionBody'
import SectionHeader from '../components/utility/admin/header/sectionHeader'
import { useQuery } from '@tanstack/react-query'
import { getContent } from '../api/content/getContent'
import AdminContentLoader from '../components/utility/Loader/AdminContentLoader'
import NoContent from '../components/utility/admin/contentdisplay/NoContent'
import { subscribersResponseType } from '../types/api/response'
import ErrorMessage2 from '../components/utility/Error/ErrorMessage2'

const AdminNewsLetter = () => {
  const { data, isLoading, error } = useQuery(['videos'], () => getContent({
    section: 'newsletterSubscribers'
  }))
  const subscribersArr: subscribersResponseType[] = data?.data.data || []

  const contentDisplay = subscribersArr.map((each, idx) => {
    return <li className='mb-2 text-base'>{`${(idx+1)}) `}{each.body1}</li>
  })
  if(error) return <ErrorMessage2 error={error} />
  return (
   <SectionBody>
    <SectionHeader 
      header="NewsLetter subscriber's"
      />
    <div>
      {
      isLoading ? <AdminContentLoader /> : subscribersArr.length === 0 ? <NoContent /> : contentDisplay
      } 
    </div>  
    
   </SectionBody>
  )
}

export default AdminNewsLetter
