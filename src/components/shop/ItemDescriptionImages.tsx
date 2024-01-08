import { useState } from 'react'
import demo1 from '../../assets/shop/demoImg1.png'
import demo2 from '../../assets/shop/demoImg2.png'
import demo3 from '../../assets/shop/demoImg3.png'
import ImagesSlideControl from './ImagesSlideControl'

const ItemDescriptionImages = () => {
  const [index, setIndex] = useState(0)
  const Images = [demo1, demo2, demo3]
  
  const imgElements = Images.map((each, idx, array) => {
    const isLastItem = idx === array.length - 1;
    return <img src={each} key={idx} alt='img' className={`object-fit w-full aspect-[1/1.1] inline-block rounded-md lg:block lg:aspect-[1/1.3] lg:rounded-none ${isLastItem ? 'col-span-2 lg:max-h-[38rem]': ''}`} />
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
    <div className='lg:flex-1'>
      <div className={`overflow-hidden max-w-[100%] rounded-xl lg:rounded-none`}>
        <div className='whitespace-nowrap transition-all ease-linear duration-500 rounded-xl lg:grid lg:grid-cols-2 lg:rounded-none lg:gap-7'
              style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
            {imgElements}
        </div>
      </div>
      <div className='mt-3.5 flex justify-center items-center gap-x-3 lg:hidden'>
        {slideControls}
      </div>
    </div>
    
  )
}

export default ItemDescriptionImages
