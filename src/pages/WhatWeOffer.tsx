import PageTransition from '../components/utility/motion/PageTransition'
import SEOPageHeader from '../components/utility/seo/SEOPageHeader'
import PageHeaderSection from '../components/utility/subHeaders/PageHeaderSection'
import Subheader from '../components/utility/subHeaders/Subheader'
import DesktopWhatWeOffer from '../components/whatweoffer/DesktopWhatWeOffer'
import MobileWhatWeOffer from '../components/whatweoffer/MobileWhatWeOffer'
import useWindowDimensions from '../hooks/UseWindowDimensions'
const WhatWeOffer = () => {
  const { width } = useWindowDimensions()
  return (
    <PageTransition layout='none'>
      <SEOPageHeader 
        page='What we offer'
      />
      <div className='layout'>
        <Subheader header='What we Offer' />
        <PageHeaderSection 
          header='Nurturing Minds: Calm and Creativity Through Mindfulness'
          para='Mindfulness is a way of paying attention to, and seeing what is happening in our lives with clarity.'
          max='51.25'
        />
      </div>
      
      { width < 1024 ?  <MobileWhatWeOffer /> : <DesktopWhatWeOffer />  }
    </PageTransition>
  )
}

export default WhatWeOffer
