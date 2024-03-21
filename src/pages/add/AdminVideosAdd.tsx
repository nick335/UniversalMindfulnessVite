import React, { useState } from 'react'
import InputDesc from '../../components/utility/form/InputDesc'
import FormRow from '../../components/utility/form/FormRow'
import InputVideo from '../../components/utility/form/InputVideo'
import { validateVideos } from '../../utilsFunction/ValidateVideos'
import showToast from '../../utilsFunction/showToast'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { postVideos } from '../../api/images/postVideos'
import ErrorHandler from '../../utilsFunction/ErrorHandler'
import Delete from '../../components/utility/admin/buttons/delete'
import Update from '../../components/utility/admin/buttons/Update'

const AdminVideosAdd = () => {
  const [vidFiles, setVidFiles] = useState<Blob>()
  const queryClient = useQueryClient()
  const [previewVideo, setPreviewVideo]= useState<string>('')
  const mutation = useMutation(postVideos, {
    onSuccess: () => {
      reset()
      setPreviewVideo('')
      showToast('uploaded Successfully', 'success')
      queryClient.invalidateQueries(['videos'])
      queryClient.refetchQueries(['videos'])
    }
  })

  type FormSchemaType = z.infer<typeof formSchema>
  const formSchema = z.object({
    video: z.string().min(1, 'a video is required')
  })

  const {
    handleSubmit,
    setValue,
    reset,
  } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema)
  })

  const onSubmit : SubmitHandler<FormSchemaType> = async () => {
    if(vidFiles){
      try {
        await mutation.mutateAsync({
          title: 'videos',
          video: vidFiles
        })
      }catch(error){
        ErrorHandler(error)
      }
    } 
  }

  const onVideoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files && event.target.files[0];

    if(files && validateVideos(files)){
      setVidFiles(files)
      const vidUrl = URL.createObjectURL(files)
      setPreviewVideo(vidUrl)
      setValue('video', vidUrl)
    } else {
      showToast('Only mp4, mpeg, webm, quicktime, x-msvideo ', 'error')
    }
  }

  function handleDelete(){
    reset()
    setPreviewVideo('')
  }
  return (
    <div>
      <form className='adminForm' onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <InputDesc 
            inputLabel='upload video'
            inputDescInfo='video upload must be in .mp4 or .mkv format'
          />
          <InputVideo 
            onVideoChange={onVideoChange}
            vidUrl={previewVideo}
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

export default AdminVideosAdd
