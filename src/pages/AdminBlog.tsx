import ContentDisplay2 from "../components/utility/admin/contentdisplay/ContentDisplay2"
import AddBlog from '../components/admin/blog/AddBlog'

const AdminBlog = () => {
  return (
    <div className="adminSectionsGridLayout">
      <AddBlog />
      <ContentDisplay2 />
      <ContentDisplay2 />
      <ContentDisplay2 />
      <ContentDisplay2 />
    </div>
  )
}

export default AdminBlog
