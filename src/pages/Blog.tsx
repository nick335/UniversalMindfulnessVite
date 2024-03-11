import { Outlet } from "react-router-dom"
import MainBlog from "../components/blogs/MainBlog"
import MostPopularBlogs from "../components/blogs/MostPopularBlogs"
import PageTransition from "../components/utility/motion/PageTransition"
import SEOPageHeader from "../components/utility/seo/SEOPageHeader"
import Subheader from "../components/utility/subHeaders/Subheader"
import SEOPageDescription from "../components/utility/seo/SEOPageDescription"

const Blog = () => {
  return (
    <PageTransition layout="layout">
      <SEOPageHeader
        page='Mindfulness blog' 
      />
      <SEOPageDescription 
        desc="Embark on a transformative journey with Universal Mindfulness. Explore insightful articles, tips, and practices to unlock your true potential. Discover the power of mindfulness and elevate your well-being today."
      />
      <Subheader header="Mindfulness Blog" />
      <section className="flex flex-col-reverse mt-12 lg:flex-col lg:mb-32">
        <div className="lg:flex lg:gap-x-12 lg:mb-16">
          <MainBlog />
          <MostPopularBlogs />
        </div>
        <Outlet />
      </section>
    </PageTransition>
  )
}

export default Blog
