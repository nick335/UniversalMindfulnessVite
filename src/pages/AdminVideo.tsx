import VideoDisplay from "../components/utility/admin/contentdisplay/VideoDisplay"

const AdminVideo = () => {
  return (
    <div className="adminSectionsGridLayout">
      <VideoDisplay videoUrl="yCyE91-D-KI" idx={0} />
      <VideoDisplay videoUrl="V8eWxOLXLK8" idx={1} />
      <VideoDisplay videoUrl="yCyE91-D-KI" idx={2} />
      <VideoDisplay videoUrl="V8eWxOLXLK8" idx={3} />
    </div>
  )
}

export default AdminVideo
