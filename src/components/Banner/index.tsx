import clsx from "clsx";

import styles from "./index.module.css";

export interface BannerProps {
  children: React.ReactNode;
  className?: string;
}

export function Banner({ children, className }: BannerProps) {
  return <div className={clsx(styles.banner, className)}>{children}</div>;
}
