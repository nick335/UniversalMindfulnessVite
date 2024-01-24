import {useRef} from 'react'
import { AiOutlineCloudUpload } from "react-icons/ai";
import { FieldError, Merge } from "react-hook-form";
import ErrorMessage from "../Error/ErrorMessage";
import SinglePreviewImage from '../admin/Preview/SingleImagePreview';

interface props {
  image: string
  errorMessage: string | undefined,
  error:  Merge<FieldError, (FieldError | undefined)[]> | undefined,
  onImageChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  deleteImg: () => void
}

const InputImage = ({image, error, errorMessage, onImageChange, deleteImg }: props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
      // Trigger the click event on the file input when the button is clicked
      fileInputRef.current?.click();
    };
  return (
    <div className='font-inter min-w-[25rem] max-w-[25rem]'>
      <h3 className='text-base font-medium text-[#8692A6]'>Upload Images</h3>
      <div className={`mt-3 transition-all duration-100 ease-in w-full border border-adminInputInactive rounded-md h-12 flex items-center justify-center cursor-pointer
        ${
          error ? 'border-error' : ''
        }
      `} onClick={handleButtonClick}>
        <AiOutlineCloudUpload className='h-6 w-6' />
        <p className='text-base ml-2 font-inter'>Upload Images</p>
        <input name='image' type='file' ref={fileInputRef}  onChange={(event) => onImageChange(event)}className='hidden' />
      </div>
      { 
        error  && <ErrorMessage message={errorMessage} />
      }

      {
        image && <SinglePreviewImage 
                    image={image}
                    deleteImg={deleteImg}
                  />
      }
    </div>
  )
}

export default InputImage
