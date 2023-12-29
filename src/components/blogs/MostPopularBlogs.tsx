import PopularBlog from "./PopularBlog"

const MostPopularBlogs = () => {
  return (
    <aside className="mt-12 lg:mt-0 lg:flex-1">
      <h3 className="font-inter font-bold text-[1.56619rem] leading-[1.65681rem]">Most Popular</h3>
      <div className="mt-8">
        <PopularBlog />
        <PopularBlog />
        <PopularBlog />
        <PopularBlog />
        <PopularBlog />
      </div>
      
    </aside>

  )
}

export default MostPopularBlogs
