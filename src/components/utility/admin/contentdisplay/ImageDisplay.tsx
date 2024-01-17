import pencil from '../../../../assets/admin/pencil.svg'
import bin from '../../../../assets/admin/bin.svg'

interface props {
  rounded: boolean,
  img: string,
}

const ImageDisplay = ({ img, rounded }: props) => {
  return (
    <div>
      <div className={`w-full ${rounded ? ' aspect-square rounded-[0.79781rem]' : ''}`}>
        <img src={img} alt='demo' className={`   ${rounded ? 'rounded-[0.79781rem] object-cover imgFocus' : 'aspect-auto w-full'}`} />
      </div>
      <div className="mt-2 flex items-center justify-between">
        <button className='flex items-center gap-x-2'>
          <span className=' capitalize underline text-headerPrimary'>edit</span>
          <img src={pencil} alt="pencil" className='w-6 h-6 object-fill' />
        </button>
        <button className='flex items-center gap-x-2'>
          <span className=' capitalize text-[#8692A6] hover:text-[#FF8080] transition-all ease-in duration-100'>delete</span>
          <img src={bin} alt='bin' className='w-[0.90419rem] h-[0.90419rem] object-fill ' />
        </button>
      </div>
    </div>
  )
}

export default ImageDisplay
