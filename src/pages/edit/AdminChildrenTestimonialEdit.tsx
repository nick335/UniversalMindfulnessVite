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
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import ErrorHandler from '../../utilsFunction/ErrorHandler'
import { editContent } from '../../api/content/editContent'
import { useParams } from 'react-router-dom'
import imgBaseUrl from '../../store/ImgBaseUrl'
import { testimonialResponseType } from '../../types/api/response'
import { getContent } from '../../api/content/getContent'
import AdminContentLoader from '../../components/utility/Loader/AdminContentLoader'
import ErrorMessage2 from '../../components/utility/Error/ErrorMessage2'
import ErrorPage from '../ErrorPage'


const AdminChildrenTestimonialEdit = () => {
  const [notFound, setNotFound] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const [contentId, setContentId] = useState('')
  const params = useParams()
  const [imgFile, setImgFile] = useState<Blob>()
  const [PreviewImage, setPreviewImage] = useState<string>('')
  const queryClient = useQueryClient()
  const { data, isLoading, error } = useQuery(['childrenTestimonial'], () => getContent({
    section: 'childrenTestimonial'
  }), {
    onSuccess: () => {
      const id = params.id
      const content: testimonialResponseType[] = data?.data.data || []
      const idExists = content.some(obj => `${obj.id}` === id)
      if(idExists){
        const foundObject= content.find(obj => `${obj.id}` === id);
        if(foundObject){
          setValue('image', foundObject.link1)
          setValue('name', foundObject.title)
          setValue('shortNote', foundObject.body1)
          setValue('caption', foundObject.header)
          setPreviewImage(`${imgBaseUrl}${foundObject.link1}`)
          setPageLoading(false)
          const contentId = `${foundObject.id}`
          setContentId(contentId)
        }
      }else {
        setNotFound(true)
        setPageLoading(false)
      }
      if(error){
        setPageLoading(false)
      }
    },
  })
  const mutation = useMutation(editContent, {
    onSuccess: () => {
      showToast('Content uploaded Successfully', 'success')
      queryClient.invalidateQueries(['childrenTestimonial'])
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
      const imgUrl = URL.createObjectURL(file);
      setImgFile(file)
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
        id: contentId,
        payload: {
          section: 'childrenTestimonial',
          title: data.name,
          body1: data.shortNote,
          ...(imgFile && {image1: imgFile,}),
          header: data.caption,
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
      <form className='adminForm' onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <InputDesc 
            inputLabel='name of child' 
            inputDescInfo='This refers to the name of the child you want to publish.'
          />
          <FormTextInput 
            label='name of child'
            inputName="name"
            register={register}
            error={errors.name}
            errorMessage={errors.name?.message}
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='Body'
            inputDescInfo='This refers to the Content of the testimony of the child'
          />
          <FormTextArea 
            label='child testimony'
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
        <Delete isLoading={mutation.isLoading} handleDelete={handleDelete} />
          <Update isLoading={mutation.isLoading} />
        </div>
      </form>
    </div>
  )
}

export default AdminChildrenTestimonialEdit
