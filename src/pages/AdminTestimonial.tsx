import Children from "../components/admin/Testimonial/Children"
import MainTestimonial from "../components/admin/Testimonial/MainTestimonial"
import Parents from "../components/admin/Testimonial/Parents"

const AdminTestimonial = () => {
  return (
    <div className="adminSectionsGridLayout">
      <MainTestimonial />
      <Parents />
      <Children />
    </div>
  )
}

export default AdminTestimonial
