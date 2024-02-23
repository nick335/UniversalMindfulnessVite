import { useState } from "react"
import { 
        AlertDialog,
        AlertDialogContent,
        AlertDialogDescription,
        AlertDialogFooter,
        AlertDialogHeader,
        AlertDialogTitle,
        AlertDialogTrigger
 } from "../../../../ShadComponent/ui/alert-dialog"
 import bin from '../../../../assets/admin/bin.svg'
import { AxiosResponse } from "axios"
import { deleteContentPayloadType } from "../../../../types/api/content"
import { deleteImagePayload } from "../../../../types/api/images"
import {  useMutation, useQueryClient } from "@tanstack/react-query"
import ErrorHandler from "../../../../utilsFunction/ErrorHandler"
import showToast from "../../../../utilsFunction/showToast"
import { Icon } from "@iconify/react/dist/iconify.js"

 interface props {
  deleteFunc: ( { id } :deleteContentPayloadType | deleteImagePayload) => Promise<AxiosResponse<any, any>>
  payload: deleteContentPayloadType | deleteImagePayload
  queryKey: string
 }
const ContentDisplayDelete = ({deleteFunc, payload, queryKey}: props) => {
  const queryClient = useQueryClient()
  const [isOpen, setIsOpen] = useState(false)
  const mutation = useMutation(deleteFunc, {
    onSuccess: () => {
      setIsOpen(false)
      showToast('content deleted successfully', 'success')
      queryClient.invalidateQueries([queryKey])
      queryClient.refetchQueries([queryKey])
    }
  })

  const Continue = async () => {
    try{
      await mutation.mutateAsync({
        id: payload.id
      })
    }catch(error){
      ErrorHandler(error)
    }
  }
  const Cancel = () => {
    setIsOpen(false)
  }
  return (
    <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
      <AlertDialogTrigger className='flex items-center gap-x-2'>
          <span className=' capitalize text-[#8692A6] hover:text-[#FF8080] transition-all ease-in duration-100'>delete</span>
          <img src={bin} alt='bin' className='w-[0.90419rem] h-[0.90419rem] object-fill ' />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this item
            and remove the item data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <button onClick={Cancel} disabled={mutation.isLoading} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 mt-2 sm:mt-0">Cancel</button>
          <button onClick={Continue} disabled={mutation.isLoading} className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
            {
              mutation.isLoading ? <Icon icon="line-md:loading-loop" className="text-2xl" /> : 'Continue'
            }
          </button>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default ContentDisplayDelete
