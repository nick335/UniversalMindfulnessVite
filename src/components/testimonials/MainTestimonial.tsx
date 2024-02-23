import { useQuery } from '@tanstack/react-query'
import { getContent } from '../../api/content/getContent'
import { testimonialResponseType } from '../../types/api/response'
import imgBaseUrl from '../../store/ImgBaseUrl'
import MainTestimonialSkeleton from '../utility/skeletons/MainTestimonialSkeleton'
import ErrorMessage3 from '../utility/Error/ErrorMessage3'
const MainTestimonial = () => {
  const { data, isLoading, error} = useQuery(['mainTestimonial'], () => getContent({section: 'mainTestimonial'}))

  const content: testimonialResponseType[] = data?.data.data || []

  const contentData = content[0]
  if(isLoading) return <MainTestimonialSkeleton />
  if(error) return <ErrorMessage3 error={error} />
  return (
    <div className='lg:flex gap-x-[4.5rem] items-center lg:mx-[4.5rem]'>
      <div className='lg:flex-1'>
        <img src={`${imgBaseUrl}${contentData.link1}`} alt={contentData.title} className='object-fill w-full aspect-[1/1.23] lg:aspect-[1.05/1] rounded-t-[6rem]' />
      </div>
      <div className='mt-8 lg:flex-1 lg:mt-0'>
        <h3 className="font-semibold text-headerPrimary text-2xl ">{contentData.title}, {contentData.header}</h3>
        <p className="text-base font-medium leading-6 mt-4">
         {contentData.body1}
        </p>
      </div>
    </div>
  )
}

export default MainTestimonial
