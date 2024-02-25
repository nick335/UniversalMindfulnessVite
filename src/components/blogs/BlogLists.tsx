import { useLocation, useParams } from 'react-router-dom'
import BlogBox from './BlogBox'
import { useQuery } from '@tanstack/react-query'
import { getContent } from '../../api/content/getContent'
import ErrorPage from '../../pages/ErrorPage'
import { blogResponseType } from '../../types/api/response'
import { nanoid } from 'nanoid'
import AdminContentLoader from '../utility/Loader/AdminContentLoader'
import ErrorMessage3 from '../utility/Error/ErrorMessage3'

const BlogLists = () => {
  const params = useParams()
  const routeName = useLocation().pathname
  const idString= params.id
  const id: number | undefined = idString ? /^\d+$/.test(idString) ? parseInt(idString, 10) : undefined : routeName === '/blog' ? 1 : undefined;
  const { isLoading, error, data } = useQuery([`popular_blog${id}`], () => getContent(
    {
      section: 'blogs',
      page: id 
    }
  ))
  const lastpage: number = data?.data.data.last_page
  const currentpage: number = data?.data.current_page
  const content: blogResponseType[] = data?.data.data.data || []

  const contentDisplay  = content.map((each) => {
    return <BlogBox 
              key={nanoid()}
              title={each.title}
              id={each.id}
              category={each.sub_section}
              img={each.link1}
            />
  })

  if(!id) return <ErrorPage />
  if(error) return <ErrorMessage3 error={error} />
  if(currentpage > lastpage) return <ErrorPage />
  return (
    <div className='md:grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:gap-x-12'>
     {
      isLoading ? <AdminContentLoader /> : contentDisplay
     }
    </div>
  )
}

export default BlogLists
