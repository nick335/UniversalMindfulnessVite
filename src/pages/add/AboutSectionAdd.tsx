import FormRow from '../../components/utility/form/FormRow'
import FormRow2 from '../../components/utility/form/FormRow2'
import InputDesc from '../../components/utility/form/InputDesc'
import FormQuillInput from '../../components/utility/form/FormQuillInput'
import InputImage from '../../components/utility/form/InputImage'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import showToast from '../../utilsFunction/showToast'
import {  useState } from 'react'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { validateImages } from '../../utilsFunction/ValidateImages'
import ErrorHandler from '../../utilsFunction/ErrorHandler'
import Delete from '../../components/utility/admin/buttons/delete'
import Update from '../../components/utility/admin/buttons/Update'
import FormTextInput from '../../components/utility/form/FormTextInput'
import { postContent } from '../../api/content/postContent'



const AboutSectionAdd = () => {
  const [imgFile, setImgFile] = useState<Blob>()
  const [PreviewImage, setPreviewImage] = useState<string>('')
  const [sectionContent, setSectionContent] = useState('')
  const queryClient = useQueryClient()


  const mutation = useMutation(postContent, {
    onSuccess: () => {
      setPreviewImage('')
      setSectionContent('')
      reset()
      showToast('Content uploaded Successfully', 'success')
      queryClient.invalidateQueries(['about'])
      queryClient.invalidateQueries(['about-edit'])
    }
  })
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    sectionContent: z.string().min(1, 'testimony is required'),
    image: z.string().min(1, 'an image is required'),
    title: z.string().min(1, 'header is required')
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
    setSectionContent(newContent)
    setValue('sectionContent', newContent)
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
  function handleDelete(){
    reset()
    setPreviewImage('')
    setSectionContent('')
  }
  const onSubmit : SubmitHandler<FormSchemaType> = async (data) => {
      try{
      if(imgFile){
        await mutation.mutateAsync({
            section: 'about',
            title: data.title,
            body1: data.sectionContent,
            image1: imgFile,     
        })
      }else{
        await mutation.mutateAsync({
            section: 'about',
            title: data.title,
            body1: data.sectionContent,
        })
      }
    }catch(error){
      ErrorHandler(error)
    }
  }
  return (
    <div>
      <form className='adminForm' onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <InputDesc  
            inputLabel='title'
            inputDescInfo='this refers to the header of the about section'
          />
          <FormTextInput 
            label='title of the section'
            inputName='title'
            register={register}
            error={errors.title}
            errorMessage={errors.title?.message}
          />
        </FormRow>
        <FormRow2>
          <InputDesc 
            inputLabel="body"
            inputDescInfo="This refers to the Content of the about section."
          />
          <FormQuillInput  
            label="body"
            value={sectionContent}
            error={errors.sectionContent}
            onChange={handleSummaryChange}
            errorMessage={errors.sectionContent?.message}
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

export default AboutSectionAdd
