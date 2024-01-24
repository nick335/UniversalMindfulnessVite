/* eslint-disable @typescript-eslint/no-explicit-any */
import { UseFormRegister } from 'react-hook-form';
import { FieldError, Merge } from "react-hook-form";
import ErrorMessage from '../Error/ErrorMessage';


interface props {
  label: string,
  register: UseFormRegister<any>
  inputName: string
  errorMessage: string | undefined,
  error:  Merge<FieldError, (FieldError | undefined)[]> | undefined
}

const FormTextInput = ({ label, register, inputName, error, errorMessage }: props) => {
  return (
    <div className='font-inter min-w-[25rem] max-w-[25rem]'>
      <h3 className='text-base font-medium text-[#8692A6] capitalize'>{label}</h3>
      <div className="mt-3">
        <input type="text" className={`w-full transition-all ease-in duration-100 border border-adminInputInactive rounded-md px-6 py-3
          ${
            error ? 'border-error' : ''
          }
        `} {...register(inputName)} />
      </div>
      {
        error && <ErrorMessage message={errorMessage} />
      }
    </div>
  )
}

export default FormTextInput
