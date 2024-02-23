import imgBaseUrl from '../../store/ImgBaseUrl'


interface props {
  img:string
  name: string
  caption: string
  testimony: string
}

const TestimonialBox = ({img, name, caption, testimony}: props) => {
  return (
    <div>
      <div>
        <img src={`${imgBaseUrl}${img}`} alt={name} className='object-fill w-full aspect-[1.06/1] lg:aspect-[1.05/1] rounded-[1.5rem]' />
      </div>
      <div className='mt-4'>
        <h3 className="font-semibold text-headerPrimary text-xl lg:text-2xl">{name}, {caption}</h3>
        <p className="text-base font-medium leading-6 mt-4 lg:text-lg lg:leading-6">
        {testimony}
        </p>
      </div>
    </div>
  )
}

export default TestimonialBox
