import clsx from "clsx";

import styles from "./index.module.css";

export interface BannerProps {
  background?: string;
  children: React.ReactNode;
  className?: string;
}

export function Banner({
  background = "halfstack.jpg",
  children,
  className,
}: BannerProps) {
  return (
    <div
      className={clsx(styles.banner, className)}
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      {children}
    </div>
  );
}
