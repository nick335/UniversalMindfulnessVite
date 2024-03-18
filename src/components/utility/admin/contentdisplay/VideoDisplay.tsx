import { deleteContent } from "../../../../api/content/deleteContent"
import AdminEmbeddedVideo from "../../EmbeddedVideo/AdminEmbeddedVideo"
import SectionHeader from "../header/sectionHeader"
import SectionBody from "../section/sectionBody"
import ContentDisplayDelete from "./ContentDisplayDelete"

interface props {
  videoUrl: string
  idx: number
}

const VideoDisplay = ({videoUrl, idx}: props) => {
  return (
    <SectionBody>
      <SectionHeader 
        header={`video${idx + 1}`}
        btnName="edit"
        routePath={'/admin/dashboard/videos'}
      />
      <AdminEmbeddedVideo vidurl={videoUrl} />
     <div className="mt-8 flex items-center justify-end">
          <ContentDisplayDelete queryKey={'videos'} deleteFunc={deleteContent} payload={{id: 37000000}} />
      </div>
    </SectionBody>
  )
}

export default VideoDisplay
