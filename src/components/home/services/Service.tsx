import chevronRight from '../../../assets/utilty/icons/chevron-right.svg'
const Service = () => {
  return (
    <div className=" mt-10 ">
      <div className='w-full aspect-video rounded-[0.32875rem] bg-red-400 shadow-service'>

      </div>
      <div className="text-center lg:mt-4 flex flex-col gap-y-[0.66rem] lg:gap-y-4">
        <h3 className="text-[1.64363rem] font-semibold text-headerPrimary lg:text-4xl">Children</h3>
        <p className="text-[0.73963rem] font-medium lg:max-w-[27.8125rem] lg:mx-auto lg:text-lg">Includes:-Growth Mindset-Better Friendships-Empathy-Reducing Anxiety-Communication Skills-Resilience</p>
        <button className='text-[0.73963rem] lg:text-lg font-medium underline flex items-center justify-center '>View More
          <span className='ml-1'>
            <img src={chevronRight} alt='icon' className='h-[0.98619rem] w-[0.98619rem] object-fill mt-1 lg:w-6 lg:h-6' />
          </span>
         </button>
      </div>
    </div>
  )
}

export default Service
