import { useState } from 'react'
import demo1 from '../../assets/shop/demoImg1.png'
import demo2 from '../../assets/shop/demoImg2.png'
import demo3 from '../../assets/shop/demoImg3.png'
import ImagesSlideControl from './ImagesSlideControl'

const ItemDescriptionImages = () => {
  const [index, setIndex] = useState(0)
  const Images = [demo1, demo2, demo3]
  
  const imgElements = Images.map((each, idx) => {
    return <img src={each} key={idx} alt='img' className='object-fit w-full aspect-[1/1.1] inline-block rounded-md' />
  })

  function SetIndex(idx:number) {
    setIndex(idx)
  }
  const slideControls = Images.map((each, idx) => {
    return <ImagesSlideControl
              key={each} 
              activeIdx={index}
              setIndex={SetIndex}
              index={idx}
           />
  })
  return (
    <div>
      <div className={`overflow-hidden max-w-[100%] rounded-xl `}>
        <div className='whitespace-nowrap transition-all ease-linear duration-500 rounded-xl'
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
            {imgElements}
        </div>
      </div>
      <div className='mt-3.5 flex justify-center items-center gap-x-3'>
        {slideControls}
      </div>
    </div>
    
  )
}

export default ItemDescriptionImages
