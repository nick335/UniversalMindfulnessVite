import { useQuery } from "@tanstack/react-query"
import { getImages } from "../api/images/getImages"
import VideoDisplay from "../components/utility/admin/contentdisplay/VideoDisplay"
import SectionHeader from "../components/utility/admin/header/sectionHeader"
import SectionBody from "../components/utility/admin/section/sectionBody"
import { videoResponseType } from "../types/api/response"
import imgBaseUrl from "../store/ImgBaseUrl"
import { nanoid } from "nanoid"
import AdminContentLoader from "../components/utility/Loader/AdminContentLoader"
import ErrorMessage2 from "../components/utility/Error/ErrorMessage2"
import NoContent from "../components/utility/admin/contentdisplay/NoContent"

const AdminVideo = () => {
  const { data, isLoading , error} = useQuery(['videos'], () => getImages({
    title: 'videos'
  }))
  const Videos: videoResponseType[] = data?.data.data || []

  const videoComponent = Videos.map((each, idx) => {
    return <VideoDisplay 
              key={nanoid()}
              videoUrl={`${imgBaseUrl}/${each.link}`}
              idx={idx}
              id={each.id}
            />
  })
  if(error) return <ErrorMessage2 error={error} />
  return (
    <>
      <SectionBody> 
        <SectionHeader 
          header="Add Video"
          btnName="Add"
          routePath="/admin/dashboard/videos/add"
        />
      </SectionBody>
      <div className="mt-8 adminSectionsGridLayout">
        {
          isLoading ? <AdminContentLoader /> : error ? <ErrorMessage2 error={error} />  : videoComponent.length === 0 ? <NoContent /> : videoComponent
        }
      </div>
    </>
    
  )
}

export default AdminVideo
