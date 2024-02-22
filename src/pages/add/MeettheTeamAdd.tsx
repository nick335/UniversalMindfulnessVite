import FormRow from "../../components/utility/form/FormRow"
import InputDesc from '../../components/utility/form/InputDesc'
import FormTextInput from '../../components/utility/form/FormTextInput'
import FormTextArea from "../../components/utility/form/FormTextArea"
import InputImage from "../../components/utility/form/InputImage"
import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'
import { useState } from "react"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { validateImages } from '../../utilsFunction/ValidateImages'
import showToast from '../../utilsFunction/showToast'
import { useMutation } from "@tanstack/react-query"
import { postContent } from "../../api/content/postContent"
import ErrorHandler from "../../utilsFunction/ErrorHandler"

const MeettheTeamAdd = () => {
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
    name: z.string().min(1, 'email is required'),
    role: z.string().min(1, 'role is required'),
    shortNote: z.string().min(1, 'role is required'),
    image: z.string()
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
      const imgUrl = URL.createObjectURL(file);
      setValue("image", imgUrl);
      setPreviewImage(imgUrl);
      setImgFile(file)
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
        section: 'team',
        title: data.name,
        header: data.role,
        body1: data.shortNote,
        image1: imgFile,
      })
    }catch(error){
      ErrorHandler(error)
    }
  }
  function handleDelete(){
    reset()
    setPreviewImage('')
  }
  return (
    <div>
      <form className="adminForm" onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <InputDesc 
              inputLabel='name of team member'
              inputDescInfo='This refers to the name of the member of the team to be added.'
            />
            <FormTextInput 
              label='member name'
              inputName="name"
              register={register}
              error={errors.name}
              errorMessage={errors.name?.message}
            />
        </FormRow>
        <FormRow>
          <InputDesc 
              inputLabel='role of team member'
              inputDescInfo='This refers to the role of the member of the team to be added.'
            />
            <FormTextInput 
              label='member role'
              inputName="role"
              register={register}
              error={errors.role}
              errorMessage={errors.role?.message}
            />
        </FormRow>
        <FormRow>
          <InputDesc 
              inputLabel='short introduction on team member'
              inputDescInfo='This refers to a short introduction of the member of the team to be added.'
            />
            <FormTextArea 
              label='member short introduction'
              inputName="shortNote"
              register={register}
              error={errors.shortNote}
              errorMessage={errors.shortNote?.message}
            />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='upload member image'
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

export default MeettheTeamAdd
