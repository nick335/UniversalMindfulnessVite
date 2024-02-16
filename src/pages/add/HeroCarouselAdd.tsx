import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'
import FormRow from '../../components/utility/form/FormRow'
import InputDesc from '../../components/utility/form/InputDesc'
import InputMultipleImage from '../../components/utility/form/InputMultipleImage'
import { z} from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { validateImages } from '../../utilsFunction/ValidateImages'
import { useState } from 'react'
import showToast from '../../utilsFunction/showToast'
import { useMutation } from '@tanstack/react-query'
import { postImages } from '../../api/images/postImages'
import { AxiosError } from 'axios'

const HeroCarouselAdd = () => {
  const [imgFiles, setImgFiles] = useState<Blob[]>([])
  const [PreviewImages, setPreviewImages] = useState<string[]>([])
  const mutation = useMutation(postImages, {
    onSuccess: () => {
      setImgFiles([])
      setPreviewImages([])
      showToast('uploaded Successfully', 'success')
    }
  })
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    images: z.array(z.string())
  })

  const {
    handleSubmit,
    formState: { errors,   },
    setValue,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormSchemaType> = async () => {
    
    try {
      await mutation.mutateAsync({
        title: 'test',
        images: imgFiles
      })
    }catch(error){
      console.log(error)
      if(error instanceof AxiosError ){
        const message = error.response?.data.message || error.message
        showToast(message, 'error')
      }else{
        showToast('something went wrong try again', 'error')
      }
    }
  }
  const onDeleteImage = (index: number) => {
    const currentImages = [...PreviewImages]
    const updatedImages = [...currentImages.slice(0, index), ...currentImages.slice(index + 1)];
    setPreviewImages(updatedImages)
    setValue("images", updatedImages);
  }
  
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if(validateImages(files)){
      if(files){
        setImgFiles(prevImgFiles => [...prevImgFiles, ...files])
        const imgUrls = Array.from(files).map((file) => URL.createObjectURL(file))
        setValue("images", [...PreviewImages, ...imgUrls]);
        setPreviewImages(prevImages => [...prevImages, ...imgUrls])
      } 
    }else{
      showToast('Only jpeg, jpg, png, and gif images are allowed and File size must not exceed the maximum limit of 1.5MB','error')  
    }
    }    
  return (
    <div>
      <form className='flex flex-col gap-y-8' onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <InputDesc 
            inputLabel='upload image'
            inputDescInfo='Image uploaded must be a .png or jpeg file of the dimension 584px(w) * 950px(h) below. '
          />
          <InputMultipleImage 
            onImageChange={onImageChange}
            error={errors.images}
            errorMessage={errors.images?.message}
            images={PreviewImages}
            deleteImg={onDeleteImage}
          />
        </FormRow>

        <div className='adminBtns'>
          <Delete />
          <Update isLoading={mutation.isLoading} />
        </div>
      </form>
    </div>
  )
}

export default HeroCarouselAdd
