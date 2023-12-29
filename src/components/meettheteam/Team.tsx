import founder from '../../assets/theteam/founder.png';
const Team = () => {
  return (
    <div className='mb-8 lg:mb-12'>
      <div className='w-fit h-fit border-[17px] rounded-lg border-headerPrimary'>
        <img src={founder} alt='founder' className='img-focus aspect-square w-full' />
      </div>
      <div>
        <h3 className="my-3 text-headerPrimary text-[2rem] font-semibold">Mary Morrall, Founder </h3>
        <p className="text-base font-medium leading-[1.782rem] lg:text-lg lg:leading-[2.00475rem]">“I am an experienced, NLP motivational Training Consultant who is driven to help individuals reach their full potential. I have designed and delivered short and long term training solutions to meet the needs of individuals in both the public and private sectors, specializing in business coaching, life coaching and autism awareness. I founded Universal Mindfulness with the vision to enable all individuals to develop the skills to manage difficulties and flourish whatever their age, education or chosen to career path.”</p>
      </div>
    </div>
  )
}

export default Team
