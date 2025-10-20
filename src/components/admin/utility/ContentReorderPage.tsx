import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  DndContext,
  DragEndEvent,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { RxDragHandleDots2 } from "react-icons/rx";
import { getContent } from "../../../api/content/getContent";
import SectionBody from "../../utility/admin/section/sectionBody";
import AdminContentLoader from "../../utility/Loader/AdminContentLoader";
import ErrorMessage2 from "../../utility/Error/ErrorMessage2";
import NoContent from "../../utility/admin/contentdisplay/NoContent";
import showToast from "../../../utilsFunction/showToast";
import ErrorHandler from "../../../utilsFunction/ErrorHandler";
import { switchContentPosition } from "../../../api/content/switchContentPosition";
import imgBaseUrl from "../../../store/ImgBaseUrl";

type ContentItemBase = {
  id: number;
  title: string;
  link1?: string | null;
};

export interface ContentReorderConfig<T extends ContentItemBase = ContentItemBase> {
  heading: string;
  description?: string;
  queryKey: string;
  section: string;
  returnPath: string;
  getSubtitle?: (item: T) => string | undefined;
  getImage?: (item: T) => string | null | undefined;
  instruction?: string;
  invalidateKeys?: string[];
}

interface SortableItemProps<T extends ContentItemBase> {
  item: T;
  index: number;
  subtitle?: string;
  image?: string | null;
  instruction?: string;
}

const SortableItem = <T extends ContentItemBase>({
  item,
  index,
  subtitle,
  image,
  instruction,
}: SortableItemProps<T>) => {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({
    id: item.id,
  });

  const style: CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.85 : 1,
    boxShadow: isDragging ? "0px 12px 24px rgba(0,0,0,0.12)" : "none",
  };

  const fallbackInitial = item.title ? item.title.charAt(0).toUpperCase() : "?";

  return (
    <li
      ref={setNodeRef}
      style={style}
      className="flex items-center justify-between rounded-md border border-[#d9d9d9] bg-[#F9FBFF] px-4 py-3 transition-shadow"
    >
      <div className="flex items-center gap-x-4">
        <button
          type="button"
          className="text-[#8692A6] p-2 cursor-grab active:cursor-grabbing"
          {...attributes}
          {...listeners}
          aria-label={`Drag handle for ${item.title}`}
        >
          <RxDragHandleDots2 className="text-2xl" />
        </button>
        <span className="font-inter font-bold text-[#8692A6] w-6 text-center">{index + 1}</span>
        <div className="w-16 h-16 rounded-md overflow-hidden bg-[#E8EEF6] flex items-center justify-center text-textSecondary font-inter font-semibold text-lg uppercase">
          {image ? (
            <img src={image} alt={item.title} className="w-full h-full object-cover" />
          ) : (
            fallbackInitial
          )}
        </div>
        <div>
          <h3 className="font-inter font-semibold text-textSecondary capitalize">{item.title}</h3>
          {subtitle && <p className="text-xs text-[#8692A6] mt-1 max-w-md">{subtitle}</p>}
          {instruction && <p className="text-[0.65rem] text-[#A1AEC8] mt-1">{instruction}</p>}
        </div>
      </div>
    </li>
  );
};

const defaultInstruction = "Drag and drop to adjust how this appears on the website.";

const ContentReorderPage = <T extends ContentItemBase>({
  config,
}: {
  config: ContentReorderConfig<T>;
}) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: { distance: 5 },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  const { data, isLoading, error } = useQuery([config.queryKey, "reorder"], () =>
    getContent({ section: config.section })
  );

  const fetchedContent = (data?.data?.data || []) as T[];

  const [orderedItems, setOrderedItems] = useState<T[]>([]);

  useEffect(() => {
    setOrderedItems(fetchedContent);
  }, [fetchedContent]);

  const idsMatch = useMemo(() => {
    const initialIds = fetchedContent.map((item) => item.id).join("-");
    const currentIds = orderedItems.map((item) => item.id).join("-");
    return initialIds === currentIds;
  }, [fetchedContent, orderedItems]);

  const mutation = useMutation(switchContentPosition, {
    onSuccess: () => {
      showToast("Section order updated", "success");
      const invalidateKeys = config.invalidateKeys || [config.queryKey];
      invalidateKeys.forEach((key) => {
        queryClient.invalidateQueries([key]);
        queryClient.invalidateQueries([key, "reorder"]);
      });
      navigate(config.returnPath);
    },
    onError: (err) => ErrorHandler(err),
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    setOrderedItems((prev) => {
      const oldIndex = prev.findIndex((item) => item.id === active.id);
      const newIndex = prev.findIndex((item) => item.id === over.id);
      if (oldIndex === -1 || newIndex === -1) return prev;
      return arrayMove(prev, oldIndex, newIndex);
    });
  };

  const handleSave = async () => {
    if (!orderedItems.length || idsMatch) return;
    try {
      await mutation.mutateAsync({
        ids: orderedItems.map((item) => item.id),
      });
    } catch {
      // handled by onError
    }
  };

  const handleCancel = () => {
    navigate(config.returnPath);
  };

  if (isLoading) {
    return (
      <div className="pt-16">
        <AdminContentLoader />
      </div>
    );
  }

  if (error) {
    return <ErrorMessage2 error={error} />;
  }

  if (fetchedContent.length === 0) {
    return (
      <SectionBody>
        <NoContent />
      </SectionBody>
    );
  }

  return (
    <SectionBody>
      <div className="flex flex-col gap-y-8">
        <div className="font-inter">
          <h2 className="text-textSecondary font-bold text-2xl">{config.heading}</h2>
          <p className="text-[#8692A6] mt-2 text-sm">
            {config.description ||
              "Adjust the arrangement below to change how these appear on the website. Save when finished."}
          </p>
        </div>
        <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <SortableContext items={orderedItems.map((item) => item.id)} strategy={verticalListSortingStrategy}>
            <ul className="flex flex-col gap-y-4">
              {orderedItems.map((item, index) => {
                const image =
                  config.getImage?.(item) ?? (item.link1 ? `${imgBaseUrl}${item.link1}` : null);
                const subtitle = config.getSubtitle?.(item);
                return (
                  <SortableItem
                    key={item.id}
                    item={item}
                    index={index}
                    image={image}
                    subtitle={subtitle}
                    instruction={config.instruction || defaultInstruction}
                  />
                );
              })}
            </ul>
          </SortableContext>
        </DndContext>
        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            className="btn3 border border-[#d9d9d9] px-6 py-3 text-sm font-medium text-[#8692A6]"
            onClick={handleCancel}
            disabled={mutation.isLoading}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn px-6 py-3 text-sm font-semibold text-textPrimary disabled:opacity-40"
            onClick={handleSave}
            disabled={mutation.isLoading || idsMatch}
          >
            {mutation.isLoading ? "Saving..." : "Save order"}
          </button>
        </div>
      </div>
    </SectionBody>
  );
};

export default ContentReorderPage;
