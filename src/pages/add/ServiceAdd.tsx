import InputImage from '../../components/utility/form/InputImage'
import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { validateImages } from '../../utilsFunction/ValidateImages'
import FormRow from '../../components/utility/form/FormRow'
import InputDesc from '../../components/utility/form/InputDesc'
import FormTextInput from '../../components/utility/form/FormTextInput'
import { useState } from "react"
import showToast from '../../utilsFunction/showToast'
import { postContent } from '../../api/content/postContent'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import FormTextArea from '../../components/utility/form/FormTextArea'

const ServiceAdd = () => {
  const [imgFile, setImgFile] = useState<Blob>()
  const [PreviewImage, setPreviewImage] = useState<string>('')
  const queryClient = useQueryClient()
  const mutation = useMutation(postContent, {
    onSuccess: () => {
      setPreviewImage('')
      reset()
      showToast('Content uploaded Successfully', 'success')
      queryClient.invalidateQueries(['services'])
    }
  })
  type FormSchemaType = z.infer<typeof serviceAddSchema>
  const serviceAddSchema = z.object({
    name: z.string().min(1, "name of service is required"),
    image: z.string().min(1, "image of service is required"),
    description: z.string().min(1, "description of service is required"),
  })
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: {errors,}
  } = useForm<FormSchemaType>({
    resolver: zodResolver(serviceAddSchema),
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
  function handleDelete(){
    reset()
    setPreviewImage('')
  }
  const onSubmit : SubmitHandler<FormSchemaType> = async (data) => {
    try{
      await mutation.mutateAsync({
        section: 'services',
        title: data.name,
        body1: data.description,
        image1: imgFile,
      })
    }catch(error){
      console.log(error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='adminForm'>
        <FormRow>
          <InputDesc 
            inputLabel='name of service'
            inputDescInfo='This refers to the name of the service'
          />
          <FormTextInput 
            label='name of service'
            inputName='name'
            register={register}
            errorMessage={errors.name?.message}
            error={errors.name}
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='description of service'
            inputDescInfo='This refers to the description of the service'
          />
          <FormTextArea
            label='service description'
            inputName='description'
            register={register}
            error={errors.description}
            errorMessage={errors.description?.message}
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='upload image'
            inputDescInfo='Image uploaded must be a .png or jpeg file of the dimension 584px(w) * 950px(h) below.'
          />
          <InputImage 
            image={PreviewImage}
            error={errors.image}
            errorMessage={errors.image?.message}
            onImageChange={onImageChange}
            deleteImg={deleteImg}
          />
        </FormRow>
        <div className='adminBtns'>
          <Delete isLoading={mutation.isLoading} handleDelete={handleDelete} />
          <Update isLoading={mutation.isLoading} />
        </div>
      </form>
    </div>
  )
}

export default ServiceAdd
