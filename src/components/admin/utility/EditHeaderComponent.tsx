import SectionHeader from '../../utility/admin/header/sectionHeader'
import SectionBody from '../../utility/admin/section/sectionBody'


interface Props {
  page: string
  value?: string
}

const EditHeaderComponent = ({ page, value }: Props) => {
  return (
    <SectionBody>
      <div className='pb-5'>
        <SectionHeader 
          header={`Edit ${page} Header`}
          btnName='edit'
          routePath={`/admin/dashboard/${value}/editHeader`}
        />
      </div>   
    </SectionBody>
  )
}

export default EditHeaderComponent
