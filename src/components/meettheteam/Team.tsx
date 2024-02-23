import imgBaseUrl from '../../store/ImgBaseUrl';

interface props {
  introduction: string
  name: string,
  role: string,
  img: string,
  color: string,
}

const Team = ({introduction, name, role, img, color }: props) => {
  return (
    <div className='mb-8 lg:mb-12'>
      <div className={`'w-fit h-fit border-[17px] rounded-lg `} style={{
        borderColor: color
      }}>
        <img src={`${imgBaseUrl}${img}`} alt='founder' className='img-focus aspect-square w-full' />
      </div>
      <div>
        <h3 className="my-3 text-headerPrimary text-[2rem] font-semibold">{name}, {role} </h3>
        <p className="text-base font-medium leading-[1.782rem] lg:text-lg lg:leading-[2.00475rem]">
          {introduction}
        </p>
      </div>
    </div>
  )
}

export default Team
