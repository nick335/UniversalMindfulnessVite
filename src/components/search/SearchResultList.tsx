import { useQuery } from '@tanstack/react-query'
import { useSearchParams, useParams, useLocation } from 'react-router-dom'
import { searchBlogContent } from '../../api/content/searchBlogContent'
import { blogResponseType } from '../../types/api/response'
import ErrorPage from '../../pages/ErrorPage'
import ErrorMessage3 from '../utility/Error/ErrorMessage3'
import AdminContentLoader from '../utility/Loader/AdminContentLoader'
import BlogBox from '../blogs/BlogBox'
import { nanoid } from 'nanoid'
import SearchPaginationController from '../utility/Pagination/SearchPaginationController'

const SearchResultList = () => {
  const [searchParams] = useSearchParams()
  const searchQuery = `${searchParams.get('search')}`
  const params = useParams()
  const routeName = useLocation().pathname
  const idString= params.id
  const id: number | undefined = idString ? /^\d+$/.test(idString) ? parseInt(idString, 10) : undefined : routeName === '/blog' ? 1 : undefined;
  const {isLoading, error, data} = useQuery([`search${searchQuery}${id}`], () => searchBlogContent({
    search: searchQuery,
    page: id
  }))
  const lastpage: number = data?.data.data.last_page
  const currentpage: number = data?.data.data.current_page
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
  if(isLoading) return <AdminContentLoader />
  return (
    <div>
      <h3 className='mb-8 text-xl md:text-2xl'>Search Result for: {searchQuery}</h3>
      <div className='md:grid md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:gap-x-12'>
      {
       contentDisplay.length === 0 ? <h3 className='text-xl md:text-2xl'>No Result for {searchQuery} </h3> : contentDisplay
      }
      </div>
      <SearchPaginationController path='/blog/page/' currentPage={currentpage} TotalPages={lastpage} searchQuery={`?search=${searchQuery}`} />
    </div>
  )
}

export default SearchResultList
