import clsx from "clsx";

import styles from "./index.module.css";

export type BodyAreaProps<As extends React.ElementType> = {
  as?: As;
  className?: string;
} & React.ComponentPropsWithoutRef<As>;

export const BodyArea = <As extends React.ElementType = "div">({
  as,
  className,
  ...props
}: BodyAreaProps<As>) => {
  const As = as ?? "div";

  return <As className={clsx(styles.bodyArea, className)} {...props} />;
};
