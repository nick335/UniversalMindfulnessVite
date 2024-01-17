import ImageDisplay from "../../utility/admin/contentdisplay/ImageDisplay"
import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import demo from '../../../assets/admin/demo2.png'

const SponsorImages = () => {
  return (
    <SectionBody>
      <SectionHeader 
        header='sponsor images'
        btnName='add images'
      />
      <div className="adminGridLayout1">
        <ImageDisplay rounded={false} img={demo} />
        <ImageDisplay rounded={false} img={demo} />
        <ImageDisplay rounded={false} img={demo} />
        <ImageDisplay rounded={false} img={demo} />
        <ImageDisplay rounded={false} img={demo} />
        <ImageDisplay rounded={false} img={demo} />
      </div>
    </SectionBody>
  )
}

export default SponsorImages
