import { useQuery } from '@tanstack/react-query'
import PageTransition from '../components/utility/motion/PageTransition'
import SEOPageHeader from '../components/utility/seo/SEOPageHeader'
import Subheader from '../components/utility/subHeaders/Subheader'
import DesktopWhatWeOffer from '../components/whatweoffer/DesktopWhatWeOffer'
import MobileWhatWeOffer from '../components/whatweoffer/MobileWhatWeOffer'
import useWindowDimensions from '../hooks/UseWindowDimensions'
import { getContent } from '../api/content/getContent'
import { whatweofferSectionResponseType } from '../types/api/response'
import AdminContentLoader from '../components/utility/Loader/AdminContentLoader'
import ErrorMessage3 from '../components/utility/Error/ErrorMessage3'
import SEOPageDescription from '../components/utility/seo/SEOPageDescription'
import FetchSubHeader from '../components/utility/subHeaders/FetchSubHeader'
const WhatWeOffer = () => {
  const { data, isLoading, error } = useQuery(['whatweoffer'], () => getContent({
    section: 'whatweoffer'
  }))
  const content: whatweofferSectionResponseType[] = data?.data.data || []
  const { width } = useWindowDimensions()
  return (
    <PageTransition layout='none'>
      <SEOPageHeader 
        page='What do we offer?'
      />
      <SEOPageDescription 
        desc='Unlock your true potential with Universal Mindfulness. Discover a transformative journey towards self-discovery and personal growth. Explore mindfulness practices that empower you to live a more fulfilling life. Start your journey today.'
      />
      <div className='layout'>
        <Subheader header='What we Offer' />
        <FetchSubHeader 
          page='whatweoffer'
          value='whatweoffer'
          max='51.25'
        />
      </div>
      
      { isLoading ? 
      <div className="mt-[2.43rem] h-[50vh] flexCenter">
        <AdminContentLoader />
      </div> : error ? <ErrorMessage3 error={error} /> :   
      width < 1024 ?  <MobileWhatWeOffer data={content} /> : <DesktopWhatWeOffer data={content} />  }
    </PageTransition>
  )
}

export default WhatWeOffer
