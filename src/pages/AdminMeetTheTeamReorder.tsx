import ContentReorderPage from "../components/admin/utility/ContentReorderPage";
import { teamResponseType } from "../types/api/response";

const AdminMeetTheTeamReorder = () => {
  return (
    <ContentReorderPage<teamResponseType>
      config={{
        heading: "Reorder Team Members",
        description:
          "Arrange the order in which team members appear on the Meet the Team page.",
        queryKey: "team",
        section: "team",
        returnPath: "/admin/dashboard/about/meettheteam",
        instruction: "Drag to reposition this team member.",
        getSubtitle: (item) => item.header,
      }}
    />
  );
};

export default AdminMeetTheTeamReorder;
