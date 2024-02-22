import ImageDisplay from "../../utility/admin/contentdisplay/ImageDisplay"
import SectionBody from '../../utility/admin/section/sectionBody'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import { useQuery } from "@tanstack/react-query"
import { getImages } from "../../../api/images/getImages"
import { imageResponseType } from "../../../types/api/response"
import { nanoid } from "nanoid"
import AdminContentLoader from "../../utility/Loader/AdminContentLoader"
const SponsorImages = () => {
  const { data, isLoading } = useQuery(['SponsorImages'], () => getImages({ section: 'test'}))
  const Images: imageResponseType[] = data?.data.data || []

  const imagesDisplay = Images.map((each) => {
    return <ImageDisplay section={each.title} id={each.id} key={nanoid()} rounded={false}  img={each.link} />
  })
  return (
    <SectionBody>
      <SectionHeader 
        header='sponsor images'
        btnName='add images'
        routePath="/admin/dashboard/sponsorsimage/add"
      />
      <div className="adminGridLayout1">
        {
          isLoading ? <AdminContentLoader /> : imagesDisplay
        }
      </div>
    </SectionBody>
  )
}

export default SponsorImages
