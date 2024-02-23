import imgBaseUrl from '../../../store/ImgBaseUrl'


interface props {
  img: string
  body: string
  name: string,
  caption: string
}
const MainTestimonialContent = ({img, body, name, caption}: props) => {
  return (
    <div className='mt-[1.13rem] font-inter'>
        <div className='w-full aspect-[4/1]'>
          <img src={`${imgBaseUrl}${img}`} alt={name} className='imgFocus object-cover' />
        </div>
        <div className=' mt-5 pb-8 leading-[1.4375rem] text-sm tracking-[-0.018rem]'>
          <p className='mt-2 font-semibold'>Body: {body}</p>
          <div className="mt-3.5">
            <h4>{name}</h4>
            <h5>{caption}</h5>
          </div>
        </div>
        
      </div>
  )
}

export default MainTestimonialContent
