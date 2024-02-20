import FormRow from '../../components/utility/form/FormRow'
import InputDesc from '../../components/utility/form/InputDesc'
import InputImage from '../../components/utility/form/InputImage'
import FormTextInput from '../../components/utility/form/FormTextInput'
import FormTextArea from '../../components/utility/form/FormTextArea'
import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { validateImages } from '../../utilsFunction/ValidateImages'
import showToast from '../../utilsFunction/showToast'
import { useState } from "react"
import { useMutation } from '@tanstack/react-query'
import { postContent } from '../../api/content/postContent'
import ErrorHandler from '../../utilsFunction/ErrorHandler'
const ParentTestimonialAdd = () => {
  const [imgFile, setImgFile] = useState<Blob>()
  const [PreviewImage, setPreviewImage] = useState<string>('')
  const mutation = useMutation(postContent, {
    onSuccess: () => {
      setPreviewImage('')
      reset()
      showToast('Content uploaded Successfully', 'success')
    }
  })
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    name: z.string().min(1, 'name is required'),
    caption: z.string().min(1, 'caption is required'),
    shortNote: z.string().min(1, 'testimony is required'),
    image: z.string().min(1, 'an image is required')
  })
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: {errors,}
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })
  const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
  
    if (file && validateImages(file)) {
      setImgFile(file)
      const imgUrl = URL.createObjectURL(file);
      setValue("image", imgUrl);
      setPreviewImage(imgUrl);
    } else {
      showToast('Only jpeg, jpg, png, and gif images are allowed, and file size must not exceed the maximum limit of 1.5MB', 'error');
    }
  };
  const deleteImg = () => {
    setPreviewImage('')
    setValue('image', '')
  }
  const onSubmit : SubmitHandler<FormSchemaType> = async (data) => {
    try{
      await mutation.mutateAsync({
        section: 'parentTest',
        title: data.name,
        body1: data.shortNote,
        image1: imgFile,
        header: data.caption,
      })
    }catch(error){
      ErrorHandler(error)
    }
  }
  return (
    <div>
      <form className='adminForm' onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <InputDesc 
            inputLabel='name of parent'
            inputDescInfo='This refers to the name of the parent you want to publish.'
          />
          <FormTextInput 
            label='name of parent'
            inputName="name"
            register={register}
            error={errors.name}
            errorMessage={errors.name?.message}
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='Body'
            inputDescInfo='This refers to the Content of the testimony of the parent'
          />
          <FormTextArea 
            label='parent testimony'
            inputName="shortNote"
            register={register}
            error={errors.shortNote}
            errorMessage={errors.shortNote?.message}
          />
        </FormRow>
          <FormRow>
          <InputDesc 
            inputLabel='upload customer image'
            inputDescInfo='Image uploaded must be a .png or jpeg. '
          />
          <InputImage 
            image={PreviewImage}
            error={errors.image}
            errorMessage={errors.image?.message}
            onImageChange={onImageChange}
            deleteImg={deleteImg}
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='caption'
            inputDescInfo='This refers to the testimonial caption (optional)'
          />
          <FormTextInput 
            label='captions'
            inputName="caption"
            register={register}
            error={errors.caption}
            errorMessage={errors.caption?.message}
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

export default ParentTestimonialAdd
