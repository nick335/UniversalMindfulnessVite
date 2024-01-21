
interface props {
  label: string
}

const FormTextArea = ({ label }: props) => {
  return (
    <div className='font-inter min-w-[25rem] max-w-[25rem]'>
      <h3 className='text-base font-medium text-[#8692A6] capitalize'>{label}</h3>
      <div className='mt-3'>
        <textarea className='min-h-[16rem] max-h-[25rem] w-full border border-adminInputInactive rounded-md px-6 py-3' />
      </div>
    </div>
  )
}

export default FormTextArea
