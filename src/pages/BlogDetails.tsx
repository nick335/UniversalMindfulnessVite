import { useParams } from 'react-router-dom'
import ContentPage from '../components/blogs/BlogContentPage/ContentPage'
import PageTransition from '../components/utility/motion/PageTransition'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getContentById } from '../api/content/getContentById'
import ErrorPage from './ErrorPage'
import AdminContentLoader from '../components/utility/Loader/AdminContentLoader'
import ErrorMessage3 from '../components/utility/Error/ErrorMessage3'
import { blogResponseType } from '../types/api/response'
import { updateBlogCount } from '../api/updateBlogCount'
import { useEffect } from 'react'
import SEOPageHeader from '../components/utility/seo/SEOPageHeader'

const BlogDetails = () => {
  const params = useParams()
  const idString = params.id
  const id: number | undefined = idString ? /^\d+$/.test(idString) ? parseInt(idString, 10) : undefined : undefined
  const mutation = useMutation(updateBlogCount)

  useEffect(() => {
    if(id){
      mutation.mutateAsync({
        id: id 
      })
    }

  }, [])
  const {data, isLoading, error} = useQuery([`blogContent${id}`], () => getContentById({
    id: id
  }))
  const content: blogResponseType[] = data?.data.data || []
  const actualContent = content[0]
  if(!id) return <ErrorPage />
  if(isLoading) return <div className='h-[50vh] flexCenter'><AdminContentLoader /></div>
  if(error) return <ErrorMessage3 error={error} />
  return (
    <PageTransition layout='layout'>
      <div className='max-w-[1140px] mx-auto'>
        <SEOPageHeader 
          page={actualContent.title}
        />
        <ContentPage 
          category={actualContent.sub_section}
          header={actualContent.title}
          writtenBy={actualContent.header}
          img={actualContent.link1}
          body={actualContent.body1}
          createdAt={actualContent.created_at}
        />
      </div>
      
    </PageTransition>
  )
}

export default BlogDetails
