import  { ReactNode } from 'react'
interface props {
  children: ReactNode
}

const FormRow2 = ({ children }: props) => {
  return (
    <div className='grid grid-cols-1 gap-y-8 w-full'>
      {children}
    </div>
  )
}

export default FormRow2
