import { useQuery } from "@tanstack/react-query"
import { getContent } from "../../../api/content/getContent"
import shuffleArray from "../../../utilsFunction/shuffleArray"
import { blogResponseType } from "../../../types/api/response"
import BlogBox from "../BlogBox"
import { nanoid } from "nanoid"
import AdminContentLoader from "../../utility/Loader/AdminContentLoader"
import ErrorMessage3 from "../../utility/Error/ErrorMessage3"
import NoContent from "../../utility/admin/contentdisplay/NoContent"

const YouMightLIkeThis = () => {
  const { isLoading, data, error  } = useQuery(['mightLike'], () => getContent({
    section: 'blogs'
  }))
  const content: blogResponseType[] = data?.data.data || []
  const shuffledArr: blogResponseType[] = shuffleArray(content)
  const actualContent = shuffledArr.slice(0, 3)
  const contentDisplay = actualContent.map((each) => {
    return <BlogBox 
              key={nanoid()}
              title={each.title}
              category={each.sub_section}
              id={each.id}
              img={each.link1}
            />
  })
  return (
    <div className="mt-4">
      <h3 className="text-[2rem] lg:text-[3.525rem] font-semibold text-center text-headerPrimary mb-4 lg:mb-10">You Might Also Like</h3>
        {
          isLoading ? <AdminContentLoader /> : error ? <ErrorMessage3 error={error} /> : contentDisplay.length === 0 ? <NoContent /> : contentDisplay 
        }
    </div>
  )
}

export default YouMightLIkeThis
