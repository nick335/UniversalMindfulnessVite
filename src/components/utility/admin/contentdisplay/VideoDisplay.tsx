// import { deleteContent } from "../../../../api/content/deleteContent"
import { deleteImage } from "../../../../api/images/deleteImage"
import AdminEmbeddedVideo from "../../EmbeddedVideo/AdminEmbeddedVideo"
import SectionHeader from "../header/sectionHeader"
import SectionBody from "../section/sectionBody"
import ContentDisplayDelete from "./ContentDisplayDelete"

interface props {
  videoUrl: string
  idx: number,
  id: number
}

const VideoDisplay = ({videoUrl, idx, id}: props) => {
  return (
    <SectionBody>
      <SectionHeader 
        header={`video${idx + 1}`}
      />
      <AdminEmbeddedVideo vidurl={videoUrl} />
     <div className="mt-8 flex items-center justify-end">
          <ContentDisplayDelete queryKey={'videos'} deleteFunc={deleteImage} payload={{id: id}} />
      </div>
    </SectionBody>
  )
}

export default VideoDisplay
