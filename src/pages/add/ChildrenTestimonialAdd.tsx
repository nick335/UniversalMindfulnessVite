import FormRow from '../../components/utility/form/FormRow'
import InputDesc from '../../components/utility/form/InputDesc'
import InputImage from '../../components/utility/form/InputImage'
import FormTextInput from '../../components/utility/form/FormTextInput'
import FormTextArea from '../../components/utility/form/FormTextArea'
import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'

const ChildrenTestimonialAdd = () => {
  return (
    <div>
      <form className='adminForm'>
        <FormRow>
          <InputDesc 
            inputLabel='name of child'
            inputDescInfo='This refers to the name of the child you want to publish.'
          />
          <FormTextInput 
            label='name of child'
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='Body'
            inputDescInfo='This refers to the Content of the testimony of the child'
          />
          <FormTextArea 
            label='child testimony'
          />
        </FormRow>
          <FormRow>
          <InputDesc 
            inputLabel='upload customer image'
            inputDescInfo='Image uploaded must be a .png or jpeg. '
          />
          <InputImage />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='caption'
            inputDescInfo='This refers to the testimonial caption (optional)'
          />
          <FormTextInput 
            label='captions'
          />
        </FormRow>
        <div className='adminBtns'>
          <Delete />
          <Update />
        </div>
      </form>
    </div>
  )
}

export default ChildrenTestimonialAdd
