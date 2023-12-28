import demoImg from '../../../assets/home/hero.png'
const Blog = () => {
  return (
    <div className="font-inter">
      <img src={demoImg} className='object-fill w-full aspect-square rounded-xl'  />
      <div className="flex flex-col gap-y-[0.84rem] w-[95%] mt-8">
        <h3 className='text-headerPrimary font-semibold text-[1.61344rem] leading-[2.17388rem]'>Does being a perfectionist affect your confidence?</h3>
        <h4 className='text-[0.79694rem] '>Nov 6 2023</h4>
        <button className='btn h-[3.4375rem] lg:h-[3.28972rem] text-textPrimary !font-lato w-full lg:max-w-[8.80056rem]'>Read More</button>
      </div>  
    </div>
  )
}

export default Blog
