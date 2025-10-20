import ContentReorderPage from "../components/admin/utility/ContentReorderPage";
import { whatweofferSectionResponseType } from "../types/api/response";

const AdminWhatWeOfferReorder = () => {
  return (
    <ContentReorderPage<whatweofferSectionResponseType>
      config={{
        heading: "Reorder What We Offer Sections",
        description: "Update the sequence of offerings displayed to users.",
        queryKey: "whatweoffer",
        section: "whatweoffer",
        returnPath: "/admin/dashboard/whatweoffer",
        instruction: "Drag to change where this offering appears.",
      }}
    />
  );
};

export default AdminWhatWeOfferReorder;
