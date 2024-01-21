import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './QuillStyles.css'


interface props {
  label: string
}

const FormQuillInput = ({ label }: props) => {
  return (
    <div className='font-inter min-w-[25rem] max-w-[25rem]'>
      <h3 className='text-base font-medium text-[#8692A6] capitalize'>{label}</h3>
      <div className="mt-3">
        <ReactQuill theme='snow' className='rounded-md min-h-[16rem]' style={{
          borderRadius: '0.5rem',
          minHeight: '16rem'
        }} />
      </div>
    </div>
  )
}

export default FormQuillInput

