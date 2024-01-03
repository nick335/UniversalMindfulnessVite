import Hero from '../components/home/hero/Hero'
import Blogs from '../components/home/blogs/Blogs'
import CustomerReviews from '../components/home/reviews/CustomerReviews'
import OurServices from '../components/home/services/OurServices'
import Sponsor from '../components/home/sponsors/Sponsor'
import PageTransition from '../components/utility/motion/PageTransition'

const Home = () => {
  return (
    <PageTransition layout='layout'>
        <Hero />
        <Sponsor />
        <OurServices />
        <CustomerReviews />
        <Blogs />
    </PageTransition>
  )
}

export default Home
