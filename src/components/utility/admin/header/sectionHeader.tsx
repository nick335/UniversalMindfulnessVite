import { ReactNode } from "react";
import { MdAdd } from "react-icons/md";
import { Link } from "react-router-dom";

type ButtonVariant = "primary" | "outline";

interface SectionHeaderProps {
  header: string;
  btnName?: string;
  routePath?: string;
  btnIcon?: ReactNode;
  secondaryBtnName?: string;
  secondaryRoutePath?: string;
  secondaryBtnIcon?: ReactNode;
  secondaryBtnVariant?: ButtonVariant;
}

const SectionHeader = ({
  header,
  btnName,
  routePath = "/",
  btnIcon,
  secondaryBtnName,
  secondaryRoutePath = "/",
  secondaryBtnIcon,
  secondaryBtnVariant = "outline",
}: SectionHeaderProps) => {
  const primaryButton = btnName ? (
    <Link
      to={routePath}
      className="inline-flex items-center gap-x-[0.88rem] py-[0.88rem] px-[1.32rem] rounded-[0.22081rem] bg-btnAdmin text-textPrimary capitalize"
    >
      {btnIcon ?? <MdAdd className="w-[1.32481rem] h-[1.32481rem]" />}
      {btnName}
    </Link>
  ) : null;

  const secondaryClasses =
    secondaryBtnVariant === "primary"
      ? "inline-flex items-center gap-x-2 py-[0.88rem] px-[1.32rem] rounded-[0.22081rem] bg-btnAdmin text-textPrimary capitalize"
      : "inline-flex items-center gap-x-2 py-[0.88rem] px-[1.32rem] rounded-[0.22081rem] border border-textSecondary text-textSecondary capitalize hover:bg-textSecondary hover:text-white transition-colors";

  const secondaryButton = secondaryBtnName ? (
    <Link to={secondaryRoutePath} className={secondaryClasses}>
      {secondaryBtnIcon}
      {secondaryBtnName}
    </Link>
  ) : null;

  const hasButtons = Boolean(primaryButton || secondaryButton);

  return (
    <div className="flex flex-wrap items-center justify-between gap-y-4 gap-x-6 font-inter">
      <h3 className="text-textSecondary capitalize font-bold text-[1.43519rem]">{header}</h3>
      {hasButtons && (
        <div className="flex items-center gap-3">
          {secondaryButton}
          {primaryButton}
        </div>
      )}
    </div>
  );
};

export default SectionHeader;


