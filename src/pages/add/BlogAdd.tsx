import FormQuillInput from "../../components/utility/form/FormQuillInput"
import FormRow from "../../components/utility/form/FormRow"
import FormTextInput from "../../components/utility/form/FormTextInput"
import InputDesc from "../../components/utility/form/InputDesc"
import InputImage from "../../components/utility/form/InputImage"
import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'


const BlogAdd = () => {
  return (
    <div>
      <form className='adminForm'>
        <FormRow>
          <InputDesc 
            inputLabel="title"
            inputDescInfo="This refers to the title of the article you want to publish."
          />
          <FormTextInput 
            label="title"
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel="category"
            inputDescInfo="This refers to the category of the article you want to publish."
          />
          <FormTextInput  
            label="category"
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel="body"
            inputDescInfo="This refers to the Content related to the of the article you want to publish."
          />
          <FormQuillInput  
            label="body"
          />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel='upload image'
            inputDescInfo='Image uploaded must be a .png or jpeg file of the dimension 584px(w) * 950px(h) below. '
          />
          <InputImage />
        </FormRow>
        <FormRow>
          <InputDesc 
            inputLabel="written by"
            inputDescInfo="This refers to the Content Writer of the article you want to publish."
          />
          <FormTextInput  
            label="written by"
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

export default BlogAdd
