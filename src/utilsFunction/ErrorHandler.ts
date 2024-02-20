import { AxiosError } from "axios"
import showToast from "./showToast"

const ErrorHandler = (error: any) => {
  if(error instanceof AxiosError ){
    const message = error.response?.data.message || error.message
    showToast(message, 'error')
  }else{
    showToast('something went wrong try again', 'error')
  }
}

export default ErrorHandler