import ContentReorderPage from "../components/admin/utility/ContentReorderPage";
import { testimonialResponseType } from "../types/api/response";

const AdminParentTestimonialReorder = () => {
  return (
    <ContentReorderPage<testimonialResponseType>
      config={{
        heading: "Reorder Parent Testimonials",
        description: "Choose which parent testimonials appear first.",
        queryKey: "parentTestimonial",
        section: "parentTestimonial",
        returnPath: "/admin/dashboard/testimonial",
        instruction: "Drag to adjust this testimonial's position.",
        getSubtitle: (item) => item.header,
      }}
    />
  );
};

export default AdminParentTestimonialReorder;
