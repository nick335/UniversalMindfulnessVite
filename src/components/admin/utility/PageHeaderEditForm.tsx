import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import {  useEffect, useState } from "react"
import FormTextInput from '../../utility/form/FormTextInput'
import { useMutation,  useQuery,  useQueryClient } from '@tanstack/react-query'
import showToast from '../../../utilsFunction/showToast'
import InputDesc from '../../utility/form/InputDesc'
import FormRow from '../../utility/form/FormRow'
import Update from '../../utility/admin/buttons/Update'
import ErrorHandler from "../../../utilsFunction/ErrorHandler"
import { getQueryOptions } from "../../../utilsFunction/queryconst"
import { getContent } from "../../../api/content/getContent"
import AdminContentLoader from "../../utility/Loader/AdminContentLoader"
import ErrorMessage2 from "../../utility/Error/ErrorMessage2"
import ErrorPage from "../../../pages/ErrorPage"
import { editContent } from "../../../api/content/editContent"
interface props {
  page: string
  value: string
}

const PageHeaderEditForm = ({ page, value }: props) => {
  const [imgFile, setImgFile] = useState<Blob | undefined>(undefined)
  const [pageLoading, setPageLoading] = useState(true)
  const [notFound, setNotFound] = useState(false)
  const {data, isLoading, error} = useQuery([`${page}-header-edit`], () => getContent({
    section: `${value}Header`
    }), getQueryOptions())
   const queryClient = useQueryClient()
  const mutation = useMutation(editContent, {
    onSuccess: () => {
      showToast('Content uploaded Successfully', 'success')
      queryClient.invalidateQueries(['event'])
      queryClient.invalidateQueries(['event-edit'])
    }
  })
  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    id: z.number().min(1, 'id is required'),
    name: z.string().min(1, 'name is required'),
    summary: z.string().min(1, ' summary is required'),
    image: z.string().min(1, 'an image is required')
  })

  const {
    register,
    handleSubmit,
    setValue,
    // reset,
    formState: {errors,}
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  useEffect(() => {
    if(!isLoading && !error){
      const content: any = data?.data.data || []

      if(content.length > 0){
        console.log(content[0])
        setValue('name', content[0].title)
        setValue('summary', content[0].body1)
        setValue('image', content[0].link1)
        setValue('id', content[0].id)
        setPageLoading(false)
        setImgFile(undefined)
      }else{
        setPageLoading(false)
        setNotFound(true)
      }
    }
    if(error){
      setPageLoading(false)
    }
    
  }, [isLoading, error])

  const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
    console.log(data)
    try{
      await mutation.mutateAsync({
        id: `${data.id}`,
        payload: {
          section: `${value}Header`,
          title: data.name,
          body1: data.summary,
          ...( imgFile && {image1: imgFile as Blob}),
        }
      })
    }catch(error){
      ErrorHandler(error)
    }
  }
  if(isLoading || pageLoading) return <AdminContentLoader />
  if(error) return <ErrorMessage2 error={error} />
  if(notFound) return <ErrorPage />
  console.log(errors)
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className='adminForm'>
        <FormRow>
          <InputDesc
            inputLabel={`Header of ${page} section page`}
            inputDescInfo={`This refers to the name given to the ${page} page header`}
          />
          <FormTextInput 
            label={`${page} page header`}
            inputName='name'
            register={register}
            error={errors.name}
            errorMessage={errors.name?.message}
          />
        </FormRow>
        <FormRow>
          <InputDesc
            inputLabel={`Sub Header of ${page} section page`}
            inputDescInfo={`This refers to the name given to the ${page} page sub header`}
          />
          <FormTextInput 
            label={`${page} page sub-header`}
            inputName='summary'
            register={register}
            error={errors.summary}
            errorMessage={errors.summary?.message}
          />
        </FormRow>
        <div className='adminBtns'>
          <Update isLoading={mutation.isLoading} />
        </div>
      </form>
    </div>
  )
}

export default PageHeaderEditForm
