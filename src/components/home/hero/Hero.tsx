import { Link } from 'react-router-dom';
import hero from '../../../assets/home/hero.png';
import hero2 from '../../../assets/home/hero2.png'; 
import HeroImgSwitcher from './HeroImgSwitcher';
const Hero = () => {
  const img = [hero, hero2]
  return (
    <section className=" mt-[1.1rem] lg:bg-bgPrimary lg:flex lg:px-8 lg:rounded-lg gap-x-12 lg:h-[40.625rem] lg:mt-[9.46rem]">
        <div className="bg-bgPrimary lg:bg-transparent py-[1.98rem] pl-[1.44rem] pr-[0.3rem] rounded-lg text-textPrimary lg:pl-0 lg:pr-0 lg:rounded-none lg:flex-1 lg:pt-20">
            <h2 className="font-semibold text-[2rem] leading-[1.3] lg:text-dynamicHeroText lg:leading-[1.15]" >Welcome to Universal Mindfulness</h2>
            <p className=" pt-[0.43rem] lg:pt-[1.5rem] font-medium text-sm lg:text-base ">
            We offer mindfulness and emotional intelligence 
            Our belief is that everyone has the right to a happy and positive life and we each have the capabilities within us to achieve that. Our aim is to empower you to develop the appropriate emotional intelligence skills so you can fulfil your potential. We help develop resilience, manage stress and build self-esteem in people of all ages.training for children, teenagers, parents, teachers, and businesses.
            </p>
            <button className="mt-[0.43rem] lg:mt-6 btn h-12 flex items-center justify-center w-4/5 max-w-[13.5rem] font-bold text-[0.8645rem] "><Link to='/contactus'>Contact Us</Link></button>
        </div>
        <div className='mt-6 aspect-[1/1.000001] lg:h-[46.75rem]  lg:aspect-[0] lg:flex-1 z-10 relative lg:w-[100%] lg:-mt-[3.0625rem] lg:rotate-[4.458deg] rounded-lg lg:overflow-hidden'>
            <HeroImgSwitcher images={img} />
        </div>
    </section>
  )
}

export default Hero
