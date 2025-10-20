import ContentReorderPage from "../components/admin/utility/ContentReorderPage";
import { aboutSectionResponseType } from "../types/api/response";

const AdminAboutReorder = () => {
  return (
    <ContentReorderPage<aboutSectionResponseType>
      config={{
        heading: "Reorder About Sections",
        description:
          "Drag items to adjust the sequence for the About page. Save the new order to update the public view.",
        queryKey: "about",
        section: "about",
        returnPath: "/admin/dashboard/about",
        instruction: "Drag and drop to change the display sequence.",
      }}
    />
  );
};

export default AdminAboutReorder;
