
interface props {
  activeIdx: number,
  index: number,
  setIndex: (idx:number) => void
}

const ImagesSlideControl = ({activeIdx, index, setIndex}: props) => {
  console.log(activeIdx)
  const isActive = index === activeIdx ? true : false
  return (
    <div className={`w-[1.3125rem] h-1.5 rounded-lg ${isActive ? 'bg-bgActiveImageSlideControl': 'bg-bgImageSlideControl'}`} onClick={() => setIndex(index)} ></div>
  )
}

export default ImagesSlideControl
