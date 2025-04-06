/* eslint-disable @typescript-eslint/no-explicit-any */
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './QuillStyles.css'
import { FieldError, Merge } from "react-hook-form";
import ErrorMessage from '../Error/ErrorMessage';
import 'quill-emoji/dist/quill-emoji.css'; // emoji styles


interface props {
  label: string
  errorMessage: string | undefined,
  error:  Merge<FieldError, (FieldError | undefined)[]> | undefined,
  value: string,
  onChange: (newContent: string) => void
}

const FormQuillInput = ({ label, error, errorMessage, value, onChange,}: props) => {
  const modules = {
    toolbar: [
      [{ 'font': [] }],
      [{ 'size': ['small', false, 'large', 'huge'] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'color': [] }, { 'background': [] }],
      [{ 'script': 'sub' }, { 'script': 'super' }],
      ['blockquote', 'code-block'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }],
      [{ 'indent': '-1' }, { 'indent': '+1' }],
      [{ 'align': [] }],
      ['link'],
      ['clean']
    ]
  };
  
  const formats = [
    'font', 'size',
    'bold', 'italic', 'underline', 'strike',
    'color', 'background',
    'script',
    'blockquote', 'code-block',
    'list', 'bullet', 'indent',
    'align',
    'link'
  ];

  return (
    <div className={`font-inter  w-full `}>
      <h3 className='text-base font-medium text-[#8692A6] capitalize'>{label}</h3>
      <div className="mt-3">
        <ReactQuill 
          theme='snow' 
          className='rounded-md min-h-[16rem]'  
          value={value} 
          onChange={onChange}  
          modules={modules}
          formats={formats}
          />
      </div>
      {
        error && <ErrorMessage message={errorMessage} />
      }
    </div>
  )
}

export default FormQuillInput

