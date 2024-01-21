import FormRow from '../../components/utility/form/FormRow'
import InputDesc from '../../components/utility/form/InputDesc'
import FormTextInput from '../../components/utility/form/FormTextInput'

const ContactEdit = () => {
  return (
    <div>
      <form>
       <FormRow>
          <InputDesc 
            inputLabel='phone'
            inputDescInfo='This refers to the name of the child you want to publish.'
          />
          <FormTextInput 
            label='name of child'
          />
        </FormRow> 
       <FormRow>
          <InputDesc 
            inputLabel='email'
            inputDescInfo='This refers to the name of the child you want to publish.'
          />
          <FormTextInput 
            label='name of child'
          />
        </FormRow> 
      </form>
      
    </div>
  )
}

export default ContactEdit
