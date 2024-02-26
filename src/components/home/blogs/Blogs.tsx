import { useQuery } from '@tanstack/react-query'
import { getContent } from '../../../api/content/getContent'
import Subheader from '../../utility/subHeaders/Subheader'
import Blog from './Blog'
import { blogResponseType } from '../../../types/api/response'
import HomeBlogSkeleton from '../../utility/skeletons/home/HomeBlogSkeleton'
import ErrorMessage3 from '../../utility/Error/ErrorMessage3'
import NoContent from '../../utility/admin/contentdisplay/NoContent'
import { nanoid } from 'nanoid'

const Blogs = () => {
  const { data, isLoading, error } = useQuery(['blogs'], () => getContent({
    section: 'blogs',
    page: 1,
  }))

  const contents: blogResponseType[] = data?.data?.data.data || []
  const reverse = contents.reverse()
  const actualContent = reverse.slice(0, 3)
  const contentDisplay = actualContent.map((each) => {
    return <Blog 
              key={nanoid()}
              img={each.link1}
              title={each.title}
              id={each.id}
              createdAt={each.created_at || ''}
            />
  })
  const loadingUi = Array.from({length: 3}).map(() => {
    return <HomeBlogSkeleton key={nanoid()} />
  })

  return (
    <section className=' mt-12 '>
      <Subheader header='Our Blog' />
      <div className='mt-10 grid gap-y-10 sm:grid-cols-2 sm:gap-x-6 md:gap-x-10 lg:grid-cols-3 xl:gap-x-20'>
        {
          isLoading ? loadingUi : error ? <ErrorMessage3 error={error} /> : actualContent.length === 0 ? <NoContent /> : contentDisplay
        }
      </div>
    </section>
  )
}

export default Blogs
