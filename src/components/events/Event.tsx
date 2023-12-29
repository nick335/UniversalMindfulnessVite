import eventImg from '../../assets/events/event.png'
const Event = () => {
  return (
    <div className="mb-12 lg:flex lg:gap-x-10">
      <div className='relative w-full h-[30rem] sm:h-[35rem] lg:flex-1 lg:h-[30rem]'>
        <img src={eventImg} alt='eventImg' className='imgFocus w-0 h-0 rounded-lg object-cover' />
      </div>
      <div className="flex mt-3 flex-col gap-y-4 text-base leading-5 tracking-[-0.0075rem] text-eventText lg:flex-[1.3] lg:mt-0 ">
        <h3 className="font-bold text-2xl lg:text-[2rem] leading-[2.1175rem] tracking-[-0.02438rem] text-headerPrimary ">Emotional Intelligence & Mindful Parents & Guardian with Me</h3>
        <p>Our Mindful Parenting Workshop will introduce you to useful NLP (neuro-linguistic programming) and mindfulness tools and techniques to help you:-</p>
        <ul className=" list-inside list-disc text-base ">
          <li>Improve communication with your child</li>
          <li>Improve communication with your child</li>
          <li>Improve communication with your child</li>
          <li>Improve communication with your child</li>
          <li>Improve communication with your child</li>
          <li>Improve communication with your child</li>
          <li>Improve communication with your child</li>
          <li>Improve communication with your child</li>
        </ul>
        <p>This three hour workshop on mindfulness-based emotional intelligence offers practical solutions for a more relaxed and happier home. You will also learn some quick techniques that calm you down when you feel overwhelmed to wire your brain for decreased anxiety and increased happiness. Parents who practice being mindful say that both they and their children feel happier, calmer, less stressed and healthier.</p>
        <button className='btn text-textPrimary w-full h-[3.4375rem] lg:max-w-[8.80056rem]'>Book Now</button>
      </div>
    </div>
  )
}

export default Event
