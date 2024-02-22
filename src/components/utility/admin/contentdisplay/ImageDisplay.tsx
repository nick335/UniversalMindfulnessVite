import { deleteImage } from '../../../../api/images/deleteImage'
import ContentDisplayDelete from './ContentDisplayDelete'

interface props {
  rounded: boolean,
  img: string,
  id: number
  section: string
}

const ImageDisplay = ({ img, rounded, id, section }: props) => {
  return (
    <div>
      <div className={`w-full ${rounded ? ' aspect-square rounded-[0.79781rem]' : ''}`}>
        <img src={`https://myserver.universalmindfulness.co.uk/images/${img}`} alt='demo' className={`   ${rounded ? 'rounded-[0.79781rem] object-cover imgFocus' : 'aspect-auto w-full'}`} />
      </div>
      <div className="mt-2 flex items-center justify-end">
        <ContentDisplayDelete queryKey={section} deleteFunc={deleteImage} payload={{id: id}} />
      </div>
    </div>
  )
}

export default ImageDisplay
