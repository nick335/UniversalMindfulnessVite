import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'
import FormRow from '../../components/utility/form/FormRow'
import InputDesc from '../../components/utility/form/InputDesc'
import InputMultipleImage from '../../components/utility/form/InputMultipleImage'
import { z} from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { validateImages } from '../../utilsFunction/ValidateImages'
import { toast } from "react-toastify";
import { useState } from 'react'

const HeroCarouselAdd = () => {
  const [PreviewImages, setPreviewImages] = useState<string[]>([])
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    images: z.array(z.string())
  })

  const {
    handleSubmit,
    formState: { errors,   },
    setValue,
    // getValues,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit: SubmitHandler<FormSchemaType> = (data) => {
    console.log(data)
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
        const imgUrls = Array.from(files).map((file) => URL.createObjectURL(file))
        setValue("images", [...PreviewImages, ...imgUrls]);
        setPreviewImages(prevImages => [...prevImages, ...imgUrls])
      } 
    }else{
      toast.error( 'Only jpeg, jpg, png, and gif images are allowed and File size must not exceed the maximum limit of 1.5MB', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })  }
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
          <Update />
        </div>
      </form>
    </div>
  )
}

export default HeroCarouselAdd
