import FormRow from '../../components/utility/form/FormRow'
import InputDesc from '../../components/utility/form/InputDesc'
import FormTextInput from '../../components/utility/form/FormTextInput'
import FormQuillInput from '../../components/utility/form/FormQuillInput'
import InputImage from '../../components/utility/form/InputImage'
import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { validateImages } from '../../utilsFunction/ValidateImages'
import showToast from '../../utilsFunction/showToast'
import { useState } from "react"
import FormRow2 from '../../components/utility/form/FormRow2'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postContent } from '../../api/content/postContent'
;
import ErrorHandler from '../../utilsFunction/ErrorHandler'
const EventsAdd = () => {
  const [imgFile, setImgFile] = useState<Blob>()
  const [PreviewImage, setPreviewImage] = useState<string>('')
  const [EventSummary, setEventSummary] = useState<string>('')
  const queryClient = useQueryClient()
  const mutation = useMutation(postContent, {
    onSuccess: () => {
      setPreviewImage('')
      reset()
      setEventSummary('')
      showToast('Content uploaded Successfully', 'success')
      queryClient.invalidateQueries(['event'])
    }
  })

  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    name: z.string().min(1, 'name is required'),
    eventSummary: z.string().min(1, 'testimony is required'),
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

  const handleSummaryChange= (newContent: string) => {
    setEventSummary(newContent)
    setValue('eventSummary', newContent)
  }
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
        section: 'event',
        title: data.name,
        body1: data.eventSummary,
        image1: imgFile,
      })
    }catch(error){
      ErrorHandler(error)
    }
  }
  function handleDelete(){
    reset()
    setPreviewImage('')
    setEventSummary('')
  }
  return (
    <div>
      <form className='adminForm' onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <InputDesc 
            inputLabel='name of event'
            inputDescInfo='This refers to the name of the event you want to publish.'
          />
          <FormTextInput 
            label='event name'
            inputName='name'
            register={register}
            error={errors.name}
            errorMessage={errors.name?.message}
          />
        </FormRow>
        <FormRow2>
          <InputDesc 
            inputLabel='event description'
            inputDescInfo='This refers to the description of the event you want to publish.'
          />
          <FormQuillInput 
            label='event description'
            value={EventSummary}
            error={errors.eventSummary}
            onChange={handleSummaryChange}
            errorMessage={errors.eventSummary?.message}
          />
        </FormRow2>
        <FormRow>
          <InputDesc 
            inputLabel='upload image'
            inputDescInfo='Image uploaded must be a .png or jpeg file of the dimension 584px(w) * 950px(h) below. '
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

export default EventsAdd
