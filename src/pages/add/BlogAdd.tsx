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
import { useMutation } from "@tanstack/react-query"
import { postContent } from "../../api/content/postContent"
import ErrorHandler from "../../utilsFunction/ErrorHandler"

const BlogAdd = () => {
  const [imgFile, setImgFile] = useState<Blob>()
  const [PreviewImage, setPreviewImage] = useState<string>('')
  const [blogContent, setBlogContent] = useState<string>('')
  const mutation = useMutation(postContent, {
    onSuccess: () => {
      setPreviewImage('')
      reset()
      showToast('Content uploaded Successfully', 'success')
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
        section: 'eventtest',
        title: data.title,
        body1: data.blogContent,
        image1: imgFile,
        header: data.category,
        body2: data.writtenBy
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
          <FormTextInput  
            label="category"
            inputName='category'
            register={register}
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
          <Delete />
          <Update isLoading={mutation.isLoading} />
        </div>
      </form>
    </div>
  )
}

export default BlogAdd
