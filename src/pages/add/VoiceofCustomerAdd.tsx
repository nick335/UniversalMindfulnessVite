import FormRow from '../../components/utility/form/FormRow'
import InputDesc from '../../components/utility/form/InputDesc'
import InputImage from '../../components/utility/form/InputImage'
import FormTextInput from '../../components/utility/form/FormTextInput'
import FormTextArea from '../../components/utility/form/FormTextArea'
import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'


const VoiceOfCustomerAdd = () => {
  return (
    <div>
      <form className='adminForm'>
        <FormRow>
          <InputDesc 
            inputLabel='name of customer'
            inputDescInfo='This refers to the name of the customer you want to publish.'
          />
          <FormTextInput 
            label='name of customer'
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='Body'
            inputDescInfo='This refers to the Content of the testimony of the customer'
          />
          <FormTextArea 
            label='customer testimony'
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

export default VoiceOfCustomerAdd
