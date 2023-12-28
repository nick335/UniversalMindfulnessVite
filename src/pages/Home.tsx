import Hero from '../components/home/Hero'
import Blogs from '../components/home/blogs/Blogs'
import CustomerReviews from '../components/home/reviews/CustomerReviews'
import OurServices from '../components/home/services/OurServices'
import Sponsor from '../components/home/sponsors/Sponsor'

const Home = () => {
  return (
    <main className='text-textSecondary mx-4  lg:w-[90%] lg:mx-auto'>
        <Hero />
        <Sponsor />
        <OurServices />
        <CustomerReviews />
        <Blogs />
    </main>
  )
}

export default Home
