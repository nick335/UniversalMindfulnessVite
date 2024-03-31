import { useSearchParams } from 'react-router-dom'
import SearchResultList from '../search/SearchResultList'
import BlogLists from './BlogLists'

const BlogPageSorter = () => {
  const [searchParams] = useSearchParams()
  const searchQuery = searchParams.get('search')
  return (
    searchQuery ? <SearchResultList /> : <BlogLists />
  )
}

export default BlogPageSorter
