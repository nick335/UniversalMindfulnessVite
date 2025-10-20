import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import showToast from "../../utilsFunction/showToast"
import { z } from "zod"
import { SubmitHandler, useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import ErrorHandler from "../../utilsFunction/ErrorHandler"
import { useEffect, useState } from "react"
import FormRow2 from "../../components/utility/form/FormRow2"
import InputDesc from "../../components/utility/form/InputDesc"
import Update from '../../components/utility/admin/buttons/Update'
import { getContent } from "../../api/content/getContent"
import { getQueryOptions } from "../../utilsFunction/queryconst"
import AdminContentLoader from "../../components/utility/Loader/AdminContentLoader"
import ErrorMessage2 from "../../components/utility/Error/ErrorMessage2"
import ErrorPage from "../ErrorPage"
import { editContent } from "../../api/content/editContent"
import FormTiptapInput from "../../components/utility/form/FormTiptapInput"


const AdminContactUsEdit = () => {
    const [pageLoading, setPageLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const queryClient = useQueryClient()
    const mutation = useMutation(editContent, {
        onSuccess: () => {
            showToast('contact us infomation updated', 'success')
            queryClient.invalidateQueries(['contactus'])
            queryClient.invalidateQueries(['admin-contact-us'])
        }
    })

    type FormSchemaType = z.infer<typeof formSchema>
    const formSchema = z.object({
        id: z.number().min(1, 'id is required'),
        body: z.string().min(1, 'contact body is required'),
    })

    const {data, isLoading, error} = useQuery(['admin-contact-us'], () => getContent({
        section: 'contactus'
    }), getQueryOptions())

    useEffect(() => {
        if(!isLoading && !error){
          const content: any = data?.data.data || []
    
          if(content.length > 0){
            setValue('body', content[0].body1 || '')
            setValue('id', content[0].id)
            setPageLoading(false)
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
        handleSubmit,
        watch,
        formState: {errors,}
    } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema)
    })
    const bodyValue = watch('body', '')
      const onSubmit: SubmitHandler<FormSchemaType> = async (data) => {
        try{
          await mutation.mutateAsync({
            id: `${data.id}`,
            payload: {
              section: `contactus`,
              body1: data.body,
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
            <FormRow2>
                <InputDesc 
                    inputLabel="contact info"
                    inputDescInfo="Use the editor to manage all text that appears beneath the Contact Us heading, including emails, phone numbers, and any additional guidance."
                />
                <FormTiptapInput
                    label="Contact information"
                    value={bodyValue}
                    onChange={(newContent) => setValue('body', newContent, { shouldValidate: true })}
                    error={errors.body}
                    errorMessage={errors.body?.message}
                />
            </FormRow2>
            <div className='adminBtns'>
                <Update isLoading={mutation.isLoading} />
            </div>
        </form>
    </div>
  )
}

export default AdminContactUsEdit
