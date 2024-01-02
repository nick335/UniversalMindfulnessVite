import PageTransition from '../components/utility/motion/PageTransition'
import PageHeaderSection from '../components/utility/subHeaders/PageHeaderSection'
import Subheader from '../components/utility/subHeaders/Subheader'
import MobileWhatWeOffer from '../components/whatweoffer/MobileWhatWeOffer'
const WhatWeOffer = () => {
  return (
    <PageTransition layout='none'>
      <div className='layout'>
        <Subheader header='What we Offer' />
        <PageHeaderSection 
          header='Nurturing Minds: Calm and Creativity Through Mindfulness'
          para='Mindfulness is a way of paying attention to, and seeing what is happening in our lives with clarity.'
          max='51.25'
        />
      </div>
      
      <MobileWhatWeOffer />
    </PageTransition>
  )
}

export default WhatWeOffer
