/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './QuillStyles.css'
import { FieldError, Merge } from "react-hook-form";
import ErrorMessage from '../Error/ErrorMessage';

interface props {
  label: string
  errorMessage: string | undefined,
  error:  Merge<FieldError, (FieldError | undefined)[]> | undefined,
  value: string,
  onChange: (newContent: string) => void 
}

const FormQuillInput = ({ label, error, errorMessage, value, onChange}: props) => {
  return (
    <div className='font-inter min-w-[25rem] max-w-[25rem]'>
      <h3 className='text-base font-medium text-[#8692A6] capitalize'>{label}</h3>
      <div className="mt-3">
        <ReactQuill theme='snow' className='rounded-md min-h-[16rem]' style={{
          borderRadius: '0.5rem',
          minHeight: '16rem'
        }} value={value} onChange={onChange}  />
      </div>
      {
        error && <ErrorMessage message={errorMessage} />
      }
    </div>
  )
}

export default FormQuillInput

