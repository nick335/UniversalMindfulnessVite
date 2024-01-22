import deleteIcon from '../../../../assets/utilty/icons/deleteicon.svg'

interface props {
  image: string
  idx: number
  deleteImg: (idx: number) => void
}

const PreviewImage = ({ image, deleteImg, idx }: props) => {
  return (
    <div>
      <img src={image} alt='image' className='w-full aspect-square object-fill rounded-md' />
      <div className='flex justify-center mt-3'>
        <img src={deleteIcon} alt='delete icon' className='object-fill w-6 h-6' onClick={() => deleteImg(idx) }  />
      </div>
    </div>
  )
}

export default PreviewImage
