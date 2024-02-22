import ImageDisplay from "../../utility/admin/contentdisplay/ImageDisplay"
import SectionHeader from "../../utility/admin/header/sectionHeader"
import SectionBody from "../../utility/admin/section/sectionBody"
import { useQuery } from "@tanstack/react-query"
import { getImages } from "../../../api/images/getImages"
import { imageResponseType } from "../../../types/api/response"
import { nanoid } from "nanoid"
import AdminContentLoader from "../../utility/Loader/AdminContentLoader"

const HeroCarouselImages = () => {
  const {  data, isLoading}  = useQuery(['HeroCarouselImages'], () => getImages({ section: 'test'}) )
  const Images: imageResponseType[] =  data?.data.data || []
  console.log(Images)

  const imagesDisplay = Images.map((each) => {
    return <ImageDisplay section={each.title} id={each.id} key={nanoid()} rounded={true}  img={each.link} />
  })


  return (
    <SectionBody>
      <SectionHeader 
        header='Hero Carousel Images'
        btnName="add images"
        routePath="/admin/dashboard/herocarouselimages/add"
      />
      <div className="adminGridLayout1">
        {
          isLoading ? <AdminContentLoader /> : imagesDisplay
        }
      </div>
    </SectionBody>
  )
}

export default HeroCarouselImages
