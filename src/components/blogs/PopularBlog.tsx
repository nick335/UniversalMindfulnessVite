import { Link } from "react-router-dom"

interface props {
  category: string,
  title: string
  id: number
}

const PopularBlog = ({ category, title, id}: props) => {
  return (
    <div className="mb-8">
      <h3 className="text-headerPopularBlog font-dmSans font-bold text-[0.9665rem] leading-[1.17356rem] capitalize">{category}</h3>
      <p className="mt-[0.3rem] text-[1.13775rem] font-semibold leading-[1.13775rem] max-w-[17.125rem]">
        <Link to={`/blog/${id}`}>
          {title}
        </Link>
      </p>
    </div>
  )
}

export default PopularBlog
