import AddEvent from "../components/admin/event/AddEvent"
import ContentDisplay2 from "../components/utility/admin/contentdisplay/ContentDisplay2"

const AdminEvents = () => {
  return (
    <div className="adminSectionsGridLayout">
      <AddEvent />
      <ContentDisplay2 />
      <ContentDisplay2 />
      <ContentDisplay2 />
      <ContentDisplay2 />
    </div>
  )
}

export default AdminEvents
