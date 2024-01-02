import BlogLists from "../components/blogs/BlogLists"
import MainBlog from "../components/blogs/MainBlog"
import MostPopularBlogs from "../components/blogs/MostPopularBlogs"
import PageTransition from "../components/utility/motion/PageTransition"
import Subheader from "../components/utility/subHeaders/Subheader"

const Blog = () => {
  return (
    <PageTransition layout="layout">
      <Subheader header="Mindfulness Blog" />
      <section className="flex flex-col-reverse mt-12 lg:flex-col lg:mb-32">
        <div className="lg:flex lg:gap-x-12 lg:mb-16">
          <MainBlog />
          <MostPopularBlogs />
        </div>
        <BlogLists />
      </section>
    </PageTransition>
  )
}

export default Blog
