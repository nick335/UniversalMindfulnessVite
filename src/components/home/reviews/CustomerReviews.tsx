import { useState } from 'react'
import Subheader from '../../utility/subHeaders/Subheader'
import CustomerReview from './CustomerReview'
import ReviewSliderController from './ReviewSliderController'

const CustomerReviews = () => {
  const [index, setIndex] = useState(0)
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
        <ReviewSliderController 
          activeIdx={index}
          ArrayLength={8}
          slideLeft={LeftSlide}
          slideRight={RightSlide}
        />
        <div className='lg:max-w-[90%] mx-auto'>
          <div className='max-w-full  w-full overflow-hidden '>
            <div  className='w-full flex flex-nowrap  whitespace-nowrap transition-all ease-linear duration-500' style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />
              <CustomerReview />
            </div>
          </div>
        </div>
        
      </div>
    </section>
  )
}

export default CustomerReviews
