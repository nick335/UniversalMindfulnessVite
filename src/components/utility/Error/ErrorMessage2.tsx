import getErrorMessage from "../../../utilsFunction/getErrorMessage"

interface props{
  error: any
}
const ErrorMessage2 = ({error}: props) => {
  const message: string = getErrorMessage(error)
  return (
    <div className='py-8 flexCenter '>
      <p className='font-inter text-error text-center text-base mt-2'>{message}</p>
    </div>
  )
}

export default ErrorMessage2
