import demo from '../../../assets/testimonial/demo4.png'
import ImageDisplay from '../../utility/admin/contentdisplay/ImageDisplay'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import SectionBody from '../../utility/admin/section/sectionBody'

const AboutGallery = () => {
  return (
    <SectionBody>
      <SectionHeader 
        header='Happy Memories gallery'
        btnName='Add Images'
        routePath='/'
      />
      <div className="adminGridLayout1">
        <ImageDisplay rounded={true} img={demo} />
        <ImageDisplay rounded={true} img={demo} />
        <ImageDisplay rounded={true} img={demo} />
        <ImageDisplay rounded={true} img={demo} />
        <ImageDisplay rounded={true} img={demo} />
        <ImageDisplay rounded={true} img={demo} />
      </div>
    </SectionBody>
  )
}

export default AboutGallery
