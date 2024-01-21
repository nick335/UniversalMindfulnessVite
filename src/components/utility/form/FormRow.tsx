import  { ReactNode } from 'react'

interface props {
  children: ReactNode
}

const FormRow = ({ children }: props) => {
  return (
    <div className='flex items-start justify-between gap-x-52'>
      {children}
    </div>
  )
}

export default FormRow
