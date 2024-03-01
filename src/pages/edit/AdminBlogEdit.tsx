import FormQuillInput from "../../components/utility/form/FormQuillInput"
import FormRow from "../../components/utility/form/FormRow"
import FormTextInput from "../../components/utility/form/FormTextInput"
import InputDesc from "../../components/utility/form/InputDesc"
import InputImage from "../../components/utility/form/InputImage"
import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { validateImages } from '../../utilsFunction/ValidateImages'
import showToast from '../../utilsFunction/showToast'
import { useState } from "react"
import FormRow2 from "../../components/utility/form/FormRow2"
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import ErrorHandler from "../../utilsFunction/ErrorHandler"
import FormSelect from "../../components/utility/form/FormSelect"
import { getContent } from "../../api/content/getContent"
import { useParams } from "react-router-dom"
import { blogResponseType } from "../../types/api/response"
import imgBaseUrl from "../../store/ImgBaseUrl"
import { editContent } from "../../api/content/editContent"
import ErrorPage from "../ErrorPage"
import ErrorMessage2 from "../../components/utility/Error/ErrorMessage2"
import AdminContentLoader from "../../components/utility/Loader/AdminContentLoader"

const AdminBlogEdit = () => {
  const [notFound, setNotFound] = useState(false)
  const [pageLoading, setPageLoading] = useState(true)
  const [contentId, setContentId] = useState('')
  const params = useParams()
  const { data, isLoading, error } = useQuery(['blogs'], () => getContent({
    section: 'blogs'
  }), {
    onSuccess: () => {
      const id = params.id
      const content: blogResponseType[] = data?.data.data || []
      const idExists = content.some(obj => `${obj.id}` === id)
      if(idExists){
        const foundObject= content.find(obj => `${obj.id}` === id);
        if(foundObject){
          setValue('image', foundObject.link1)
          setValue('title', foundObject.title)
          setValue('blogContent', foundObject.body1)
          setValue('category', foundObject.sub_section)
          setValue('writtenBy', foundObject.header)
          setBlogContent(foundObject.body1)
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
  const [imgFile, setImgFile] = useState<Blob>()
  const [PreviewImage, setPreviewImage] = useState<string>('')
  const [blogContent, setBlogContent] = useState<string>('')
  const queryClient = useQueryClient()
  const mutation = useMutation(editContent, {
    onSuccess: () => {
      setPreviewImage('')
      setBlogContent('')
      reset()
      showToast('Content uploaded Successfully', 'success')
      queryClient.invalidateQueries(['blogs'])
    }
  })
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    title: z.string().min(1, 'name is required'),
    blogContent: z.string().min(1, 'testimony is required'),
    image: z.string().min(1, 'an image is required'),
    writtenBy: z.string().min(1, 'written by is required'),
    category: z.string().min(1, 'category is required')
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
    setBlogContent(newContent)
    setValue('blogContent', newContent)
  }
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
          section: 'blogs',
          title: data.title,
          body1: data.blogContent,
          ...( imgFile && {image1: imgFile}),
          sub_section: data.category,
          header: data.writtenBy
        }
      })
    }catch(error){
      ErrorHandler(error)
    }
  }
  function handleDelete(){
    reset()
    setPreviewImage('')
    setBlogContent('')
  }
  function handleCategoryChange(category: string){
    setValue('category', category)
  }
  if(isLoading || pageLoading) return <AdminContentLoader />
  if(error) return <ErrorMessage2 error={error} />
  if(notFound) return <ErrorPage />
  return (
    <div>
      <form className='adminForm' onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <InputDesc 
            inputLabel="title"
            inputDescInfo="This refers to the title of the article you want to publish."
          />
          <FormTextInput 
            label="title"
            inputName='title'
            register={register}
            error={errors.title}
            errorMessage={errors.title?.message}
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel="category"
            inputDescInfo="This refers to the category of the article you want to publish."
          />
          <FormSelect 
            handleCategoryChange={handleCategoryChange}
            error={errors.category}
            errorMessage={errors.category?.message}
           />
        </FormRow>
        <FormRow2>
          <InputDesc 
            inputLabel="body"
            inputDescInfo="This refers to the Content related to the of the article you want to publish."
          />
          <FormQuillInput  
            label="body"
            value={blogContent}
            error={errors.blogContent}
            onChange={handleSummaryChange}
            errorMessage={errors.blogContent?.message}
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
        <FormRow>
          <InputDesc 
            inputLabel="written by"
            inputDescInfo="This refers to the Content Writer of the article you want to publish."
          />
          <FormTextInput  
            label="written by"
            inputName='writtenBy'
            register={register}
            error={errors.writtenBy}
            errorMessage={errors.writtenBy?.message}
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

export default AdminBlogEdit
