import hero from '../../assets/home/hero.png';
const Hero = () => {
  return (
    <section className=" mt-[1.1rem] ">
        <div className="bg-bgPrimary py-[1.98rem] pl-[1.44rem] pr-[0.3rem] rounded-lg text-textPrimary">
            <h2 className="font-semibold text-[2rem] leading-[1.3]" >Welcome to Universal Mindfulness</h2>
            <p className=" pt-[0.43rem] font-medium text-sm ">
            We offer mindfulness and emotional intelligence 
            Our belief is that everyone has the right to a happy and positive life and we each have the capabilities within us to achieve that. Our aim is to empower you to develop the appropriate emotional intelligence skills so you can fulfil your potential. We help develop resilience, manage stress and build self-esteem in people of all ages.training for children, teenagers, parents, teachers, and businesses.
            </p>
            <button className="mt-[0.43rem] btn h-12 flex items-center justify-center w-4/5 max-w-[13.5rem] font-bold text-[0.8645rem] ">Contact Us</button>
        </div>
        <div className='mt-6 aspect-w-22 aspect-h-20'>
            <img src={hero} alt='hero' className='object-cover w-full h-full rounded-lg imgFocus' />
        </div>
    </section>
  )
}

export default Hero
