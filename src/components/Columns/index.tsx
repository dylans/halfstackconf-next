import clsx from "clsx";

import styles from "./index.module.css";

export type ColumnsProps<As extends React.ElementType> = {
  as?: As;
  className?: string;
} & React.ComponentPropsWithoutRef<As>;

export const Columns = <As extends React.ElementType = "div">({
  as,
  className,
  ...props
}: ColumnsProps<As>) => {
  const As = as ?? "div";

  return <As className={clsx(className, styles.columns)} {...props} />;
};
