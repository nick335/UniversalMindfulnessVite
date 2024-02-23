import getErrorMessage from "../../../utilsFunction/getErrorMessage"
import { MdErrorOutline } from "react-icons/md";
interface props{
  error: any
}

const ErrorMessage3 = ({error}: props) => {
  const message: string = getErrorMessage(error)
  return (
    <div className='py-12 flexCenter flex-col '>
      <MdErrorOutline className='text-error text-5xl' />
      <p className='font-inter text-error text-center text-base mt-4'>{message}</p>
    </div>
  )
}

export default ErrorMessage3
