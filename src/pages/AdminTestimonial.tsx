import Children from "../components/admin/Testimonial/Children"
import MainTestimonial from "../components/admin/Testimonial/MainTestimonial"
import Parents from "../components/admin/Testimonial/Parents"
import EditHeaderComponent from "../components/admin/utility/EditHeaderComponent"

const AdminTestimonial = () => {
  return (
    <div className="adminSectionsGridLayout">
      <EditHeaderComponent page='Testimonial' value="testimonial" />
      <MainTestimonial />
      <Parents />
      <Children />
    </div>
  )
}

export default AdminTestimonial
