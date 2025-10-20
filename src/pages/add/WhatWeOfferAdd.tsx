import React, {  useState } from 'react'
import FormRow from '../../components/utility/form/FormRow'
import InputDesc from '../../components/utility/form/InputDesc'
import FormTextInput from '../../components/utility/form/FormTextInput'
import FormRow2 from '../../components/utility/form/FormRow2'
import FormTiptapInput from '../../components/utility/form/FormTiptapInput'
import InputImage from '../../components/utility/form/InputImage'
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { validateImages } from '../../utilsFunction/ValidateImages'
import showToast from '../../utilsFunction/showToast'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postContent } from '../../api/content/postContent'
import ErrorHandler from '../../utilsFunction/ErrorHandler'
import Delete from '../../components/utility/admin/buttons/delete'
import Update from '../../components/utility/admin/buttons/Update'

const WhatWeOfferAdd = () => {
  const queryClient = useQueryClient()
  const [body1, setBody1] = useState('')
  const [body2, setBody2] = useState('')
  const [PreviewImage1, setPreviewImage1] = useState('')
  const [PreviewImage2, setPreviewImage2] = useState('')
  const [PreviewImage3, setPreviewImage3] = useState('')
  const [ImgFile1, setImgFile1] = useState<Blob>()
  const [ImgFile2, setImgFile2] = useState<Blob>()
  const [ImgFile3, setImgFile3] = useState<Blob>()
  const mutation = useMutation(postContent, {
    onSuccess: () => {
      setPreviewImage1('')
      setBody1('')
      setPreviewImage2('')
      setBody2('')
      setPreviewImage3('')
      reset()
      showToast('Content uploaded Successfully', 'success')
      queryClient.invalidateQueries(['whatweoffer'])
      queryClient.invalidateQueries(['whatweoffer-edit'])
    }
  })


  type FormSchemaType = z.infer<typeof formSchema>

  const formSchema = z.object({
    body1: z.string().min(1, 'testimony is required'),
    image1: z.string().min(1, 'an image is required'),
    title: z.string().min(1, 'header is required'),
    body2: z.string().optional(),
    image2: z.string().min(1, 'an image is required'),
    image3: z.string().min(1, 'an image is required'),
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
  function handleDelete(){
    reset()
    setPreviewImage1('')
    setBody1('')
    setPreviewImage2('')
    setBody2('')
    setPreviewImage3('')
  }
  const handleBody1Change = (newContent: string) => {
    setBody1(newContent)
    setValue('body1', newContent)
  }
  const handleBody2Change = (newContent: string) => {
    setBody2(newContent)
    setValue('body2', newContent)
  }
  const onImageChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
  
    if (file && validateImages(file)) {
      const imgUrl = URL.createObjectURL(file);
      setImgFile1(file)
      setValue("image1", imgUrl);
      setPreviewImage1(imgUrl);
    } else {
      showToast('Only jpeg, jpg, png, and gif images are allowed, and file size must not exceed the maximum limit of 1.5MB', 'error');
    }
  };
  const onImageChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
  
    if (file && validateImages(file)) {
      const imgUrl = URL.createObjectURL(file);
      setImgFile2(file)
      setValue("image2", imgUrl);
      setPreviewImage2(imgUrl);
    } else {
      showToast('Only jpeg, jpg, png, and gif images are allowed, and file size must not exceed the maximum limit of 1.5MB', 'error');
    }
  };
  const onImageChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
  
    if (file && validateImages(file)) {
      const imgUrl = URL.createObjectURL(file);
      setImgFile3(file)
      setValue("image3", imgUrl);
      setPreviewImage3(imgUrl);
    } else {
      showToast('Only jpeg, jpg, png, and gif images are allowed, and file size must not exceed the maximum limit of 1.5MB', 'error');
    }
  };
  const deleteImg1 = () => {
    setPreviewImage1('')
    setValue('image1', '')
  }
  const deleteImg2 = () => {
    setPreviewImage1('')
    setValue('image2', '')
  }
  const deleteImg3 = () => {
    setPreviewImage3('')
    setValue('image3', '')
  }

  const onSubmit : SubmitHandler<FormSchemaType> = async (data) => {
    try{
      await mutation.mutateAsync({
        section: 'whatweoffer',
        title: data.title,
        body1: data.body1,
        ...(body2 && {body2: data.body2}),
        ...(ImgFile1 && { image1: ImgFile1 }),
        ...(ImgFile2 && { image2: ImgFile2 }),
        ...(ImgFile3 && { image3: ImgFile3 }),
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
            inputLabel="body1"
            inputDescInfo="This refers to the Content of the top section."
          />
          <FormTiptapInput
            label="body"
            value={body1}
            error={errors.body1}
            onChange={handleBody1Change}
            errorMessage={errors.body1?.message}
          />
        </FormRow2>
        <FormRow>
          <InputDesc 
            inputLabel='upload  main image'
            inputDescInfo='Image uploaded must be a .png or jpeg file of the dimension 584px(w) * 950px(h) below. '
          />
          <InputImage 
            image={PreviewImage1}
            error={errors.image1}
            errorMessage={errors.image1?.message}
            onImageChange={onImageChange1}
            deleteImg={deleteImg1}
          />
        </FormRow>
        <FormRow2>
          <InputDesc 
            inputLabel="body2"
            inputDescInfo="This refers to the Content of the bottom section."
          />
          <FormTiptapInput
            label="body"
            value={body2}
            error={errors.body2}
            onChange={handleBody2Change}
            errorMessage={errors.body2?.message}
          />
        </FormRow2>
        <FormRow>
          <InputDesc 
            inputLabel='upload  sub image 1'
            inputDescInfo='Image uploaded must be a .png or jpeg file of the dimension 584px(w) * 950px(h) below. '
          />
          <InputImage 
            image={PreviewImage2}
            error={errors.image2}
            errorMessage={errors.image2?.message}
            onImageChange={onImageChange2}
            deleteImg={deleteImg2}
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='upload  sub image 2'
            inputDescInfo='Image uploaded must be a .png or jpeg file of the dimension 584px(w) * 950px(h) below. '
          />
          <InputImage 
            image={PreviewImage3}
            error={errors.image3}
            errorMessage={errors.image3?.message}
            onImageChange={onImageChange3}
            deleteImg={deleteImg3}
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

export default WhatWeOfferAdd
