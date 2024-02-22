import { AxiosError } from "axios"


const  getErrorMessage = (error: any) => {
  if(error instanceof AxiosError ){
    const message = error.response?.data.message || error.message
    return message
  }else{
    return 'something went wrong try again' 
  }
}

export default getErrorMessage 