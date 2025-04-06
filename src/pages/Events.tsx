import PageTransition from '../components/utility/motion/PageTransition'
import Subheader from '../components/utility/subHeaders/Subheader'
import Event from '../components/events/Event'
import SEOPageHeader from '../components/utility/seo/SEOPageHeader'
import { useQuery } from '@tanstack/react-query'
import { getContent } from '../api/content/getContent'
import { eventResponseType } from '../types/api/response'
import EventSkeleton from '../components/utility/skeletons/EventSkeleton'
import { nanoid } from 'nanoid'
import ErrorMessage3 from '../components/utility/Error/ErrorMessage3'
import NoContent from '../components/utility/admin/contentdisplay/NoContent'
import SEOPageDescription from '../components/utility/seo/SEOPageDescription'
import FetchSubHeader from '../components/utility/subHeaders/FetchSubHeader'

const Events = () => {
  const { data, isLoading, error } = useQuery(['event'], () => getContent({section: 'event'}))

  const contentArr: eventResponseType[] = data?.data.data || []

  const latestContentArr = [...contentArr].reverse()
  const loadingUi = Array.from({length: 4}).map(() => {
    return <EventSkeleton key={nanoid()} />
  })

  const contentDisplay = latestContentArr.map((each) => {
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
      <SEOPageDescription 
        desc='Join Universal Mindfulness events to explore and unlock your true potential. Experience transformative sessions designed to enhance mindfulness, personal growth, and self-discovery. Embrace the power of presence and start your journey towards a more fulfilling life today.'
      />
      <Subheader header='Events' />
      <FetchSubHeader 
        page='events'
        value='events'
        max='57.25'
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
