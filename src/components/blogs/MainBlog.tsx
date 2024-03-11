import { useQuery } from "@tanstack/react-query"
import { getContent } from "../../api/content/getContent"
import ErrorMessage3 from "../utility/Error/ErrorMessage3"
import AdminContentLoader from "../utility/Loader/AdminContentLoader"
import { blogResponseType } from "../../types/api/response"
import imgBaseUrl from "../../store/ImgBaseUrl"

const MainBlog = () => {
  const { data, isLoading, error } = useQuery(['main_blog'], () => getContent(
    {
      section: 'blogs',
      page: 1
    }
  ))
  const content: blogResponseType[] = data?.data.data.data || []
  const actualContent = content[0]
  if(error) return <ErrorMessage3 error={error} />
  if(isLoading) return <div className="hidden lg:block lg:flex-[2] pb-[1.24rem] rounded-[1.41044rem] mb-6 md:mb-10 lg:mb-0 lg:h-fit"><AdminContentLoader /></div>
  return (
    <div className="hidden lg:block lg:flex-[2] bg-bgBlogBox  pb-[1.24rem] rounded-[1.41044rem] mb-6 md:mb-10 lg:mb-0 lg:h-fit">
      <div className="bg-red-400 w-full lg:h-[21.44rem] xl:h-[23.44rem]  rounded-t-[1.41044rem] ">
        <img src={`${imgBaseUrl}${actualContent.link1}`} className="w-full h-full object-cover rounded-t-[1.41044rem]" alt={actualContent.title}/>
      </div>
      <h4 className="pl-[0.71rem] lg:pl-[1.2rem]  text-headerSecondary mt-3 font-dmSans text-[0.98731rem] leading-4 font-bold ">{actualContent.sub_section}</h4>
      <p className="pl-[0.71rem] lg:pl-[1.2rem] font-semibold text-[1.12838rem] leading-[1.12838rem] mt-1.5 capitalize">{actualContent.title}</p>
    </div>
  )
}

export default MainBlog
