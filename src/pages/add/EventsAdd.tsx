import FormRow from '../../components/utility/form/FormRow'
import InputDesc from '../../components/utility/form/InputDesc'
import FormTextInput from '../../components/utility/form/FormTextInput'
import FormQuillInput from '../../components/utility/form/FormQuillInput'
import InputImage from '../../components/utility/form/InputImage'
import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'

const EventsAdd = () => {
  return (
    <div>
      <form className='adminForm' >
        <FormRow>
          <InputDesc 
            inputLabel='name of event'
            inputDescInfo='This refers to the name of the event you want to publish.'
          />
          <FormTextInput 
            label='event name'
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='event description'
            inputDescInfo='This refers to the description of the event you want to publish.'
          />
          <FormQuillInput 
            label='event description'
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='upload image'
            inputDescInfo='Image uploaded must be a .png or jpeg file of the dimension 584px(w) * 950px(h) below. '
          />
          <InputImage />
        </FormRow>
        <div className='adminBtns'>
          <Delete />
          <Update />
        </div>
      </form>
    </div>
  )
}

export default EventsAdd
