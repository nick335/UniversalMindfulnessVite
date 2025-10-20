import ContentReorderPage from "../components/admin/utility/ContentReorderPage";
import { blogResponseType } from "../types/api/response";

const AdminBlogReorder = () => {
  return (
    <ContentReorderPage<blogResponseType>
      config={{
        heading: "Reorder Blog Posts",
        description: "Control the order in which blog posts appear to readers.",
        queryKey: "blogs",
        section: "blogs",
        returnPath: "/admin/dashboard/blog",
        instruction: "Drag to reorder this blog post.",
        getSubtitle: (item) =>
          [item.sub_section, item.header].filter(Boolean).join(" • "),
      }}
    />
  );
};

export default AdminBlogReorder;
