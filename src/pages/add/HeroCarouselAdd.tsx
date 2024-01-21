import Update from '../../components/utility/admin/buttons/Update'
import Delete from '../../components/utility/admin/buttons/delete'
import FormRow from '../../components/utility/form/FormRow'
import InputDesc from '../../components/utility/form/InputDesc'
import InputImage from '../../components/utility/form/InputImage'

const HeroCarouselAdd = () => {
  return (
    <div>
      <form className='flex flex-col gap-y-8'>
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

export default HeroCarouselAdd
