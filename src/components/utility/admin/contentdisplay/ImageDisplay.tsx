import ContentDisplayDelete from './ContentDisplayDelete'

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
      <div className="mt-2 flex items-center justify-end">
        <ContentDisplayDelete />
      </div>
    </div>
  )
}

export default ImageDisplay
