import PageTransition from '../components/utility/motion/PageTransition'
import Subheader from '../components/utility/subHeaders/Subheader'
import PageHeaderSection from '../components/utility/subHeaders/PageHeaderSection'
import Event from '../components/events/Event'
import SEOPageHeader from '../components/utility/seo/SEOPageHeader'
import { useQuery } from '@tanstack/react-query'
import { getContent } from '../api/content/getContent'
import { eventResponseType } from '../types/api/response'
import EventSkeleton from '../components/utility/skeletons/EventSkeleton'
import { nanoid } from 'nanoid'
import ErrorMessage3 from '../components/utility/Error/ErrorMessage3'
import NoContent from '../components/utility/admin/contentdisplay/NoContent'

const Events = () => {
  const { data, isLoading, error } = useQuery(['event'], () => getContent({section: 'event'}))

  const contentArr: eventResponseType[] = data?.data.data || []

  const loadingUi = Array.from({length: 4}).map(() => {
    return <EventSkeleton key={nanoid()} />
  })

  const contentDisplay = contentArr.map((each) => {
    return <Event 
            key={nanoid()}
            name={each.title}
            desc={each.body1}
            link1={each.link1}
          />
  })

  return (
    <PageTransition layout='layout'>
      <SEOPageHeader 
        page='Events'
      />
      <Subheader header='Events' />
      <PageHeaderSection 
        header='Providing emotional intelligence and mindfulness in adults and kids.'
        para='Throughout the year, we offer adult workshops, kids clubs and training programmes focused on developing emotional intelligence and mindfulness.'
        max='57.125'
      />
      <section className='mt-7 lg:mt-12 lg:mb-32'>
        {
          isLoading ? loadingUi : error ? <ErrorMessage3 error={error} /> : contentDisplay.length === 0 ? <NoContent /> : contentDisplay
        }
      </section>
    </PageTransition>
  )
}

export default Events
