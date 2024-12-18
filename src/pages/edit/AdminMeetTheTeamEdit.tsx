import FormRow from "../../components/utility/form/FormRow"
import InputDesc from '../../components/utility/form/InputDesc'
import FormTextInput from '../../components/utility/form/FormTextInput'
import FormTextArea from "../../components/utility/form/FormTextArea"
import InputImage from "../../components/utility/form/InputImage"
import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'
import { useEffect, useState } from "react"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { validateImages } from '../../utilsFunction/ValidateImages'
import showToast from '../../utilsFunction/showToast'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import ErrorHandler from "../../utilsFunction/ErrorHandler"
import { teamResponseType } from "../../types/api/response"
import imgBaseUrl from "../../store/ImgBaseUrl"
import { useParams } from "react-router-dom"
import { getContent } from "../../api/content/getContent"
import { editContent } from "../../api/content/editContent"
import AdminContentLoader from "../../components/utility/Loader/AdminContentLoader"
import ErrorMessage2 from "../../components/utility/Error/ErrorMessage2"
import ErrorPage from "../ErrorPage"
import { getQueryOptions } from "../../utilsFunction/queryconst"

const AdminMeetTheTeamEdit = () => {
  const [notFound, setNotFound] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const [contentId, setContentId] = useState('')
  const params = useParams()
  const [imgFile, setImgFile] = useState<Blob>()
  const [PreviewImage, setPreviewImage] = useState<string>('')
  const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery(['team-edit'], () => getContent({
    section: 'team'
  }), getQueryOptions())
  const mutation = useMutation(editContent, {
    onSuccess: () => {
      showToast('Content uploaded Successfully', 'success')
      queryClient.invalidateQueries(['team'])
      queryClient.invalidateQueries(['team-edit'])
    }
  })
  useEffect(() => {
    if(!isLoading && !error){
      const id = params.id
      const content: teamResponseType[] = data?.data.data || []
      const idExists = content.some(obj => `${obj.id}` === id)

      if(idExists){
        const foundObject = content.find(obj => `${obj.id}` === id);
        if(foundObject){
          setValue('image', foundObject.link1)
          setValue('name', foundObject.title)
          setValue('role', foundObject.header)
          setValue('shortNote', foundObject.body1)
          setPreviewImage(`${imgBaseUrl}${foundObject.link1}`)
          setPageLoading(false)
          const contentId = `${foundObject.id}`
          setContentId(contentId)
        }
      }else {
        setPageLoading(false)
        setNotFound(true)
      }
      if(error){
        setPageLoading(false)
      }
    }
  }, [isLoading, error])
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
        id: contentId,
        payload: {
         section: 'team',
         title: data.name,
         header: data.role,
         body1: data.shortNote,
         ...( imgFile && {image1: imgFile}), 
        }
        
      })
    }catch(error){
      ErrorHandler(error)
    }
  }
  function handleDelete(){
    reset()
    setPreviewImage('')
  }
  if(isLoading || pageLoading) return <AdminContentLoader />
  if(error) return <ErrorMessage2 error={error} />
  if(notFound) return <ErrorPage />
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

export default AdminMeetTheTeamEdit
