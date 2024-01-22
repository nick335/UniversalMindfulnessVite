
interface props{
  message: string | undefined
}

const ErrorMessage = ({message}: props) => {
  return (
    <p className='font-inter text-error text-xs mt-2'>{message }</p>
  )
}

export default ErrorMessage