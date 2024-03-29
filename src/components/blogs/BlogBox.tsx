import { Link } from "react-router-dom"
import imgBaseUrl from "../../store/ImgBaseUrl"

interface props {
  title: string
  category: string
  id: number
  img: string
}

const BlogBox = ({ title, category, id,img}: props) => {
  return (
    <div className="bg-bgBlogBox pb-[1.22rem] rounded-[1.41044rem] mb-6 md:mb-10 lg:mb-12 lg:pb-9">
      <div className=" w-full aspect-[2/1]  rounded-t-[1.41044rem] ">
        <img src={`${imgBaseUrl}${img}`} className="w-full h-full  rounded-t-[1.41044rem] imgFocus" />
      </div>
      <h4 className="pl-[0.71rem] text-headerSecondary mt-3 font-dmSans text-[0.98731rem] leading-4 font-bold capitalize ">{category}</h4>
      <p className="pl-[0.71rem] font-semibold text-[1.12838rem] leading-[1.12838rem] mt-1.5 lg:mt-2 capitalize">
        <Link to={`/blog/${id}`}>
          {title}
        </Link>
      </p>
    </div>
  )
}

export default BlogBox
