import ContentReorderPage from "../components/admin/utility/ContentReorderPage";
import { eventResponseType } from "../types/api/response";

const AdminEventsReorder = () => {
  return (
    <ContentReorderPage<eventResponseType>
      config={{
        heading: "Reorder Events",
        description: "Adjust how events are prioritised on the Events page.",
        queryKey: "event",
        section: "event",
        returnPath: "/admin/dashboard/events",
        instruction: "Drag to rearrange this event.",
      }}
    />
  );
};

export default AdminEventsReorder;
