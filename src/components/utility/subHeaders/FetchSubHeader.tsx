import { useQuery } from '@tanstack/react-query'
import PageHeaderSkeleton from './PageHeaderSkeleton'
import { getContent } from '../../../api/content/getContent'
import PageHeaderSection from './PageHeaderSection'

interface props {
  page: string,
  value: string,
  max: string
}

const FetchSubHeader = ({ page, value, max }: props) => {
  const { data, isLoading, error } = useQuery([`${page}-header`], () => getContent({section: `${value}Header`}))

  const contentArr = data?.data.data || []
  const HeaderContent = contentArr[0]
  if(isLoading) return <PageHeaderSkeleton max={max} />
  if(error) return <h3 className='text-center text-red-500'>Error: Failed to load</h3>
  return (
    <PageHeaderSection 
      header={HeaderContent.title}
      para={HeaderContent.body1}
      max={max}
    />
  )
}

export default FetchSubHeader
