import ImageDisplay from "../../utility/admin/contentdisplay/ImageDisplay"
import SectionHeader from "../../utility/admin/header/sectionHeader"
import SectionBody from "../../utility/admin/section/sectionBody"
import demo from '../../../assets/testimonial/demo4.png'

const HeroCarouselImages = () => {
  return (
    <SectionBody>
      <SectionHeader 
        header='Hero Carousel Images'
        btnName="add images"
        routePath="/admin/dashboard/herocarouselimages/add"
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

export default HeroCarouselImages
