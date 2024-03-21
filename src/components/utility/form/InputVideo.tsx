import { useRef } from "react";
import { AiOutlineCloudUpload } from "react-icons/ai"
import AdminEmbeddedVideo from "../EmbeddedVideo/AdminEmbeddedVideo";


interface props {
  onVideoChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
  vidUrl: string
}


const InputVideo = ({onVideoChange, vidUrl}: props) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  }

  return (
    <div className='font-inter min-w-[25rem] max-w-[25rem]'>
      <h3 className='text-base font-medium text-[#8692A6]'>Upload Videos</h3>
      <div className={`mt-3 transition-all duration-100 ease-in w-full border border-adminInputInactive rounded-md h-12 flex items-center justify-center cursor-pointer`} onClick={handleButtonClick}>
        <AiOutlineCloudUpload className='h-6 w-6' />
        <p className="text-base ml-2 font-inter">Upload Images</p>
        <input name="video" type='file' ref={fileInputRef} onChange={(event) => onVideoChange(event)}  className="hidden" />
      </div>
      {
        vidUrl && <AdminEmbeddedVideo vidurl={vidUrl} inputPreview={true} />
      }
    </div>
  )
}

export default InputVideo
