import { Link } from 'react-router-dom';
import HeroImgSwitcher from './HeroImgSwitcher';
import { useQuery } from '@tanstack/react-query';
import { getImages } from '../../../api/images/getImages';
import { imageResponseType } from '../../../types/api/response';
import HeroImgSkeleton from '../../utility/skeletons/home/HeroImgSkeleton';
import ErrorMessage3 from '../../utility/Error/ErrorMessage3';
import NoContent from '../../utility/admin/contentdisplay/NoContent';
const Hero = () => {
  const { data, isLoading, error } = useQuery(['HeroCarouselImages'], () => getImages({title: 'HeroCarouselImages'}))

  const Images: imageResponseType[] = data?.data.data || []

  const imagesLinks = Images.map((each) => {
    return each.link
  })
  return (
    <section className=" mt-[1.1rem] lg:bg-bgPrimary lg:flex lg:px-8 lg:rounded-lg gap-x-12 lg:h-[40.625rem] lg:mt-[9.46rem]">
        <div className="bg-bgPrimary lg:bg-transparent py-[1.98rem] pl-[1.44rem] pr-[0.3rem] rounded-lg text-textPrimary lg:pl-0 lg:pr-0 lg:rounded-none lg:flex-1 lg:pt-20">
            <h2 className="font-semibold text-[2rem] leading-[1.3] lg:text-dynamicHeroText lg:leading-[1.15] lg:max-w-[30.625rem]" >Welcome to Universal Mindfulness</h2>
            <p className=" pt-[0.43rem] lg:pt-[1.5rem] font-medium text-sm lg:text-lg ">
              We believe everyone has the right to a happy and fulfilling life, and we each possess the potential to achieve it. Our mission is to empower you to develop the emotional intelligence skills needed to realise your full potential. 
            </p>
            <div className='flex flex-col lg:flex-row gap-y-3 lg:gap-x-4 lg:gap-y-0 lg:justify-center '>
              <button className="mt-[0.43rem] lg:mt-6 btn h-12 flex items-center justify-center w-4/5 max-w-[13.5rem] font-bold text-[0.8645rem] "><Link to='/contactus'>Contact Us</Link></button>
              <button className="mt-[0.43rem] lg:mt-6 btn h-12 flex items-center justify-center w-4/5 max-w-[13.5rem] font-bold text-[0.8645rem] "><Link to='/about'>Who We Are?</Link></button>
            </div>
            
        </div>
        <div className={`mt-6 aspect-[1/1.000001] lg:h-[46.75rem]  lg:aspect-[0] lg:flex-1 z-10 relative lg:w-[100%] lg:-mt-[3.0625rem]  rounded-lg lg:overflow-hidden ${
          error || imagesLinks.length === 0 ? 'bg-slate-50' : ''
        }`}>
            {
              isLoading ? <HeroImgSkeleton /> : error ?<ErrorMessage3 error={error} /> : imagesLinks.length === 0 ? <NoContent /> : <HeroImgSwitcher images={imagesLinks} />
            }
        </div>
    </section>
  )
}

export default Hero
