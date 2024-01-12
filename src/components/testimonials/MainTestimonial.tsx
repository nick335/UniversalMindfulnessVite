import demo1 from '../../assets/testimonial/demo1.png'
const MainTestimonial = () => {
  return (
    <div className='lg:flex gap-x-[4.5rem] items-center lg:mx-[4.5rem]'>
      <div className='lg:flex-1'>
        <img src={demo1} alt='demo1' className='object-fill w-full aspect-[1/1.23] lg:aspect-[1.05/1] rounded-t-[6rem]' />
      </div>
      <div className='mt-8 lg:flex-1 lg:mt-0'>
        <h3 className="font-semibold text-headerPrimary text-2xl ">John, father of an 8-year-old with anxiety, wipes away a tear</h3>
        <p className="text-base font-medium leading-6 mt-4">
        "Watching my child crumble under fear was unbearable. Universal Mindfulness was the lifeline we desperately needed. They equipped me with tools to be his anchor, and now we weather the storms together." "Watching my child crumble under fear was unbearable. Universal Mindfulness was the lifeline we desperately needed. They equipped me with tools to be his anchor, and now we weather the storms together."
        </p>
      </div>
    </div>
  )
}

export default MainTestimonial
