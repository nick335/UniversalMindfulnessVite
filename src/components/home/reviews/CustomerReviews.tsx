import { useState } from 'react'
import Subheader from '../../utility/subHeaders/Subheader'
import CustomerReview from './CustomerReview'
import ReviewSliderController from './ReviewSliderController'
import { useQueries } from '@tanstack/react-query'
import { getContent } from '../../../api/content/getContent'
import HomeCustomerReviewSkeleton from '../../utility/skeletons/home/HomeCustomerReviewSkeleton'
import ErrorMessage3 from '../../utility/Error/ErrorMessage3'
import { testimonialResponseType } from '../../../types/api/response'
import shuffleArray from '../../../utilsFunction/shuffleArray'
import { nanoid } from 'nanoid'
import NoContent from '../../utility/admin/contentdisplay/NoContent'

const CustomerReviews = () => {
  const [index, setIndex] = useState(0)
  const result = useQueries({
    queries: [
      {
        queryKey: ['childrenTestimonial'],
        queryFn: () => getContent({section: 'childrenTestimonial'})
      },
      {
        queryKey: ['parentTestimonial'],
        queryFn: () => getContent({section: 'parentTestimonial'})
      },
    ]
  });
  const isLoading = result[0].isLoading || result[1].isLoading
  const error = result[0].error || result[1].error
  const data: testimonialResponseType[] = [
    ...result[0].data?.data.data || [],
    ...result[1].data?.data.data || [],
  ] 
  const shuffledArr: testimonialResponseType[] = shuffleArray(data)
  const contentData = shuffledArr.slice(0, 4)
  const contentDisplay = contentData.map((each) => {
    return <CustomerReview 
              key={nanoid()}
              testimony={each.body1}
              name={each.title}
              caption={each.header}
              img={each.link1}
          />
  })
  function RightSlide(){
    setIndex(prevIndex => prevIndex + 1)
   }
   function LeftSlide(){
    setIndex(prevIndex => prevIndex - 1)
   }
  return (
    <section className='mt-[2.57rem]'>
      <Subheader header='VOICE OF THE CUSTOMER' />
      <div className='mt-4 lg:mt-10'>
        { isLoading ? <HomeCustomerReviewSkeleton /> : error ? <ErrorMessage3 error={error} /> : contentDisplay.length === 0 ? <NoContent /> :
        <><ReviewSliderController 
          activeIdx={index}
          ArrayLength={contentDisplay.length}
          slideLeft={LeftSlide}
          slideRight={RightSlide}
        />
        <div className='lg:max-w-[90%] mx-auto'>
          <div className='max-w-full  w-full overflow-hidden '>
            <div  className='w-full flex flex-nowrap  whitespace-nowrap transition-all ease-linear duration-500' style={{ transform: `translate3d(${-index * 100}%, 0, 0)`, WebkitFlexWrap: 'nowrap', flexWrap: 'nowrap' }}>
              {contentDisplay}
            </div>
          </div>
        </div> </>}
      </div>
    </section>
  )
}

export default CustomerReviews
