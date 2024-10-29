import Hero from '../components/home/hero/Hero'
import CustomerReviews from '../components/home/reviews/CustomerReviews'
import OurServices from '../components/home/services/OurServices'
import Sponsor from '../components/home/sponsors/Sponsor'
import PageTransition from '../components/utility/motion/PageTransition'
import SEOPageHeader from '../components/utility/seo/SEOPageHeader'
import SEOPageDescription from '../components/utility/seo/SEOPageDescription'
import InspiringStories from '../components/home/inspiringStories/InspiringStories'

const Home = () => {
  return (
    <PageTransition layout='layout'>
        <SEOPageHeader 
          page='Home'
        />
        <SEOPageDescription 
          desc='Embark on a transformative journey with Universal Mindfulness. Explore insightful articles, tips, and practices to unlock your true potential. Discover the power of mindfulness and elevate your well-being today.'
        />
        <Hero />
        <Sponsor />
        <OurServices />
        <InspiringStories />
        <CustomerReviews />
    </PageTransition>
  )
}

export default Home
