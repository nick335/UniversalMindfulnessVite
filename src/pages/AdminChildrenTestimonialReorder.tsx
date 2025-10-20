import ContentReorderPage from "../components/admin/utility/ContentReorderPage";
import { testimonialResponseType } from "../types/api/response";

const AdminChildrenTestimonialReorder = () => {
  return (
    <ContentReorderPage<testimonialResponseType>
      config={{
        heading: "Reorder Children Testimonials",
        description: "Update the order in which children testimonials are shown.",
        queryKey: "childrenTestimonial",
        section: "childrenTestimonial",
        returnPath: "/admin/dashboard/testimonial",
        instruction: "Drag to adjust this testimonial's position.",
        getSubtitle: (item) => item.header,
      }}
    />
  );
};

export default AdminChildrenTestimonialReorder;
