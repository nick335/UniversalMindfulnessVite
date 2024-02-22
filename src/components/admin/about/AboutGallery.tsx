import { useQuery } from '@tanstack/react-query'
import demo from '../../../assets/testimonial/demo4.png'
import ImageDisplay from '../../utility/admin/contentdisplay/ImageDisplay'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import SectionBody from '../../utility/admin/section/sectionBody'
import { getImages } from '../../../api/images/getImages'
import { imageResponseType } from '../../../types/api/response'
import { nanoid } from 'nanoid'
import AdminContentLoader from '../../utility/Loader/AdminContentLoader'

const AboutGallery = () => {
  const { data, isLoading } = useQuery(['aboutGallery'], () => getImages({ section: 'test'}))
  const Images: imageResponseType[] = data?.data.data || []

  const imagesDisplay = Images.map((each) => {
    return <ImageDisplay section={each.title} id={each.id} key={nanoid()} rounded={true}  img={each.link} />
  })
  return (
    <SectionBody>
      <SectionHeader 
        header='Happy Memories gallery'
        btnName='Add Images'
        routePath='/admin/dashboard/about/gallery/add'
      />
      <div className="adminGridLayout1">
        {
          isLoading ? <AdminContentLoader /> : imagesDisplay
        }
      </div>
    </SectionBody>
  )
}

export default AboutGallery
