import clsx from "clsx";

import styles from "./index.module.css";

export type GridProps<As extends React.ElementType> = {
  as?: As;
  children?: React.ReactNode;
  className?: string;
} & React.ComponentPropsWithoutRef<As>;

export const Grid = <As extends React.ElementType = "div">({
  as,
  className,
  ...props
}: GridProps<As>) => {
  const As = as ?? "div";

  return <As className={clsx(className, styles.grid)} {...props} />;
};
