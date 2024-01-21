import {useRef} from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";

const InputImage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
      // Trigger the click event on the file input when the button is clicked
      fileInputRef.current?.click();
    };
  return (
    <div className='font-inter min-w-[25rem] max-w-[25rem]'>
      <h3 className='text-base font-medium text-[#8692A6]'>Upload Images</h3>
      <div className=' mt-3 w-full border border-adminInputInactive rounded-md h-12 flex items-center justify-center cursor-pointer' onClick={handleButtonClick}>
        <AiOutlineCloudUpload className='h-6 w-6' />
        <p className='text-base ml-2 font-inter'>Upload Images</p>
        <input name='image' type='file' ref={fileInputRef}  className='hidden' />
      </div>
    </div>
  )
}

export default InputImage
