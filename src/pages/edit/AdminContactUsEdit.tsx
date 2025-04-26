import { useMutation, useQuery, useQueryClient, } from "@tanstack/react-query"
import showToast from "../../utilsFunction/showToast"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import ErrorHandler from "../../utilsFunction/ErrorHandler"
import { useEffect, useState } from "react"
import FormRow from "../../components/utility/form/FormRow"
import FormTextInput from "../../components/utility/form/FormTextInput"
import InputDesc from "../../components/utility/form/InputDesc"
import Update from '../../components/utility/admin/buttons/Update'
import { getContent } from "../../api/content/getContent"
import { getQueryOptions } from "../../utilsFunction/queryconst"
import AdminContentLoader from "../../components/utility/Loader/AdminContentLoader"
import ErrorMessage2 from "../../components/utility/Error/ErrorMessage2"
import ErrorPage from "../ErrorPage"
import { editContent } from "../../api/content/editContent"


const AdminContactUsEdit = () => {
    const [imgFile, setImgFile] = useState<Blob>()
    const [pageLoading, setPageLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const queryClient = useQueryClient()
    const mutation = useMutation(editContent, {
        onSuccess: () => {
            showToast('contact us infomation updated', 'success')
            queryClient.invalidateQueries(['contactus', 'admin-contact-us'])
        }
    })

    type FormSchemaType = z.infer<typeof formSchema>
    const formSchema = z.object({
        id: z.number().min(1, 'id is required'),
        email: z.string().email('enter a valid email').min(1, 'email required'),
        phone: z.string().min(1, "number required").max(11, "Invalid Number").regex(/^\d+$/, "Phone number must contain only digits"),
        image: z.string().min(1, 'an image is required'),
    })

    const {data, isLoading, error} = useQuery(['admin-contact-us'], () => getContent({
        section: 'contactus'
    }), getQueryOptions())

    useEffect(() => {
        if(!isLoading && !error){
          const content: any = data?.data.data || []
    
          if(content.length > 0){
            setValue('email', content[0].title)
            setValue('phone', content[0].body1)
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
    const {
        setValue,
        // reset,
        handleSubmit,
        register,
        formState: {errors,}
    } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema)
    })
      const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
        try{
          await mutation.mutateAsync({
            id: `${data.id}`,
            payload: {
              section: `contactus`,
              title: data.email,
              body1: data.phone,
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
  return (
    <div>
        <form className="adminForm" onSubmit={handleSubmit(onSubmit)}>
            <FormRow>
                <InputDesc 
                    inputLabel="email"
                    inputDescInfo="This refers to the email of the contact us page"
                />
                <FormTextInput 
                    label="email"
                    inputName='email'
                    register={register}
                    error={errors.email}
                    errorMessage={errors.email?.message}
                />
            </FormRow>
            <FormRow>
                <InputDesc 
                    inputLabel="phone"
                    inputDescInfo="This refers to the phone of the contact us page"
                />
                <FormTextInput 
                    label="phone"
                    inputName='phone'
                    register={register}
                    error={errors.phone}
                    errorMessage={errors.phone?.message}
                />
            </FormRow>
            <div className='adminBtns'>
                <Update isLoading={mutation.isLoading} />
            </div>
        </form>
    </div>
  )
}

export default AdminContactUsEdit