import Hero from '../components/home/hero/Hero'
import Blogs from '../components/home/blogs/Blogs'
import CustomerReviews from '../components/home/reviews/CustomerReviews'
import OurServices from '../components/home/services/OurServices'
import Sponsor from '../components/home/sponsors/Sponsor'
import PageTransition from '../components/utility/motion/PageTransition'
import SEOPageHeader from '../components/utility/seo/SEOPageHeader'
import SEOPageDescription from '../components/utility/seo/SEOPageDescription'

const Home = () => {
  return (
    <PageTransition layout='layout'>
        <SEOPageHeader 
          page='home'
        />
        <SEOPageDescription 
          desc='Embark on a transformative journey with Universal Mindfulness. Explore insightful articles, tips, and practices to unlock your true potential. Discover the power of mindfulness and elevate your well-being today.'
        />
        <Hero />
        <Sponsor />
        <OurServices />
        <CustomerReviews />
        <Blogs />
    </PageTransition>
  )
}

export default Home
