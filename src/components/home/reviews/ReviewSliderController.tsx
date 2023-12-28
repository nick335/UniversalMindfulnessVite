import leftController from '../../../assets/utilty/icons/ArrowLeftButton.svg';
import rightController from '../../../assets/utilty/icons/ArrowRightButton.svg' 
import styles from './reviews.module.css'

interface props {
  activeIdx: number,
  ArrayLength: number,
  slideLeft: () => void,
  slideRight: () => void,
}

const ReviewSliderController = ({activeIdx, ArrayLength, slideLeft, slideRight }: props) => {
  const lastIndex = activeIdx === ArrayLength-1
  return (
    <div className='flex items-center justify-end gap-2.5'>
      { activeIdx > 0 && <img src={leftController} alt='controller' className={styles.controller} onClick={slideLeft} />}
      { !lastIndex && <img src={rightController} alt='controller' className={styles.controller} onClick={slideRight}/> }
    </div>
  )
}

export default ReviewSliderController
