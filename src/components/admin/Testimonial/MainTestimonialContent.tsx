import demo from '../../../assets/testimonial/demo1.png'
const MainTestimonialContent = () => {
  return (
    <div className='mt-[1.13rem] font-inter'>
        <div className='w-full aspect-[4/1]'>
          <img src={demo} alt='demo' className='imgFocus object-cover' />
        </div>
        <div className=' mt-5 pb-8 leading-[1.4375rem] text-sm tracking-[-0.018rem]'>
          <p className='mt-2 font-semibold'>Body: Mindfulness is a valuable life skill that can help us direct our attention to the present moment with open-minded curiosity and acceptance. Rather than worrying about the past or what might happen in the future, Mindfulness trains us to respond skilfully to whatever is happening right now, without judgment. 
          In essence, Mindfulness is a way of paying attention to, and seeing what is happening in our lives with clarity. But why is this important?</p>
          <div className="mt-3.5">
            <h4>Sarah Murray,</h4>
            <h5>LCSW Heart Wild Therapy, LLC</h5>
          </div>
        </div>
        
      </div>
  )
}

export default MainTestimonialContent
