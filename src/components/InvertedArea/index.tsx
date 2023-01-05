import clsx from "clsx";

import styles from "./index.module.css";

export interface InvertedAreaProps {
  children: React.ReactNode;
  className?: string;
}

export const InvertedArea = ({ children, className }: InvertedAreaProps) => {
  return <div className={clsx(styles.invertedArea, className)}>{children}</div>;
};
