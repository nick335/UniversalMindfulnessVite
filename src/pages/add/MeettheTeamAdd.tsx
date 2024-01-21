import FormRow from "../../components/utility/form/FormRow"
import InputDesc from '../../components/utility/form/InputDesc'
import FormTextInput from '../../components/utility/form/FormTextInput'
import FormTextArea from "../../components/utility/form/FormTextArea"
import InputImage from "../../components/utility/form/InputImage"
import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'

const MeettheTeamAdd = () => {
  return (
    <div>
      <form className="adminForm">
        <FormRow>
          <InputDesc 
              inputLabel='name of team member'
              inputDescInfo='This refers to the name of the member of the team to be added.'
            />
            <FormTextInput 
              label='member name'
            />
        </FormRow>
        <FormRow>
          <InputDesc 
              inputLabel='role of team member'
              inputDescInfo='This refers to the role of the member of the team to be added.'
            />
            <FormTextInput 
              label='member role'
            />
        </FormRow>
        <FormRow>
          <InputDesc 
              inputLabel='short introduction on team member'
              inputDescInfo='This refers to a short introduction of the member of the team to be added.'
            />
            <FormTextArea 
              label='member short introduction'
            />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='upload member image'
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

export default MeettheTeamAdd
