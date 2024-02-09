import AddBlog from '../components/admin/blog/AddBlog'
import ContentDisplay4 from "../components/utility/admin/contentdisplay/ContentDisplay4"

const AdminBlog = () => {
  return (
    <div className="adminSectionsGridLayout">
      <AddBlog />
      <ContentDisplay4 />
      <ContentDisplay4 />
      <ContentDisplay4 />
      <ContentDisplay4 />
    </div>
  )
}

export default AdminBlog;
