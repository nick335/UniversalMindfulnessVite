import { useQuery } from '@tanstack/react-query'
import ImageDisplay from '../../utility/admin/contentdisplay/ImageDisplay'
import SectionHeader from '../../utility/admin/header/sectionHeader'
import SectionBody from '../../utility/admin/section/sectionBody'
import { getImages } from '../../../api/images/getImages'
import { imageResponseType } from '../../../types/api/response'
import { nanoid } from 'nanoid'
import AdminContentLoader from '../../utility/Loader/AdminContentLoader'
import NoContent from '../../utility/admin/contentdisplay/NoContent'
import ErrorMessage2 from '../../utility/Error/ErrorMessage2'

const AboutGallery = () => {
  const { data, isLoading, error } = useQuery(['aboutGallery'], () => getImages({ title: 'aboutGallery'}))
  const Images: imageResponseType[] = data?.data.data || []

  const imagesDisplay = Images.map((each) => {
    return <ImageDisplay section={each.section} id={each.id} key={nanoid()} rounded={true}  img={each.link} />
  })
  if(error) return <ErrorMessage2 error={error} />
  return (
    <SectionBody>
      <SectionHeader 
        header='Happy Memories gallery'
        btnName='Add Images'
        routePath='/admin/dashboard/about/gallery/add'
      />
      <div className="adminGridLayout1">
        {
          isLoading ? <AdminContentLoader /> : imagesDisplay.length === 0 ?
          <NoContent /> : imagesDisplay
        }
      </div>
    </SectionBody>
  )
}

export default AboutGallery
