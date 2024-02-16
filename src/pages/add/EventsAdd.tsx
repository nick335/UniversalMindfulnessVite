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

const EventsAdd = () => {
  const [PreviewImage, setPreviewImage] = useState<string>('')
  const [EventSummary, setEventSummary] = useState<string>('')

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
  const onSubmit : SubmitHandler<FormSchemaType> = (data) => {
    console.log(data)
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
          <Delete />
          <Update isLoading={false} />
        </div>
      </form>
    </div>
  )
}

export default EventsAdd
