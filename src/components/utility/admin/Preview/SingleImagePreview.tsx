import deleteIcon from '../../../../assets/utilty/icons/deleteicon.svg'

interface props {
  image: string
  deleteImg: () => void
}

const SinglePreviewImage = ({ image, deleteImg }: props) => {
  return (
    <div className='mt-4'>
      <img src={image} alt='image' className='w-full aspect-square object-fill rounded-md' />
      <div className='flex justify-center mt-3'>
        <img src={deleteIcon} alt='delete icon' className='object-fill w-6 h-6' onClick={deleteImg}  />
      </div>
    </div>
  )
}

export default SinglePreviewImage
