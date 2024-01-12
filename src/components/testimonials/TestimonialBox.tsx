import demo1 from '../../assets/testimonial/demo3.png'

const TestimonialBox = () => {
  return (
    <div>
      <div>
        <img src={demo1} alt='demo1' className='object-fill w-full aspect-[1.06/1] lg:aspect-[1.05/1] rounded-[1.5rem]' />
      </div>
      <div className='mt-4'>
        <h3 className="font-semibold text-headerPrimary text-xl lg:text-2xl">Sarah, mother of a 12-year-old with depression</h3>
        <p className="text-base font-medium leading-6 mt-4 lg:text-lg lg:leading-6">
        "The communication tools we learned have made a huge difference in our family. We talk openly and honestly now, and it's brought us closer together."
        </p>
      </div>
    </div>
  )
}

export default TestimonialBox
