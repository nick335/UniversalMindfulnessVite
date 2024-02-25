import { useQuery } from "@tanstack/react-query"
import { getContent } from "../../api/content/getContent"
import PopularBlogSkeleton from "../utility/skeletons/blogs/PopularBlogSkeleton"
import PopularBlog from "./PopularBlog"
import { blogResponseType } from "../../types/api/response"
import { nanoid } from "nanoid"
import NoContent from "../utility/admin/contentdisplay/NoContent"
import ErrorMessage3 from "../utility/Error/ErrorMessage3"

const MostPopularBlogs = () => {
  const { data, isLoading, error} = useQuery(['popular_blogs'], () => getContent(
    {
      section:'blogs',
      page: 1
    }
  ))
  const contents: blogResponseType[] = data?.data?.data.data || []
  const reverse = contents.reverse()
  const actualContent = reverse.slice(0, 5)

  const contentDisplay = actualContent.map((each) => {
    return <PopularBlog 
              key={nanoid()}
              id={each.id}
              title={each.title}
              category={each.sub_section}
          />
  })
  const loadingUi = Array.from({length: 5}).map(() => {
    return <PopularBlogSkeleton key={nanoid()} />
  })
  return (
    <aside className="mt-12 lg:mt-0 lg:flex-1">
      <h3 className="font-inter font-bold text-[1.56619rem] leading-[1.65681rem]">Most Popular</h3>
      <div className="mt-8">
      {
          isLoading ? loadingUi : error ? <ErrorMessage3 error={error} /> : actualContent.length === 0 ? <NoContent /> : contentDisplay
        }
      </div>
      
    </aside>

  )
}

export default MostPopularBlogs
