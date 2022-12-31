import clsx from "clsx";

import styles from "./index.module.css";

export interface BannerProps {
  background?: string;
  children: React.ReactNode;
  className?: string;
  size?: BannerSize;
}

const sizeStyles = {
  medium: styles.sizeMedium,
  large: styles.sizeLarge,
} as const;

export type BannerSize = keyof typeof sizeStyles;

export function Banner({
  background = "halfstack.jpg",
  children,
  className,
  size = "medium",
}: BannerProps) {
  return (
    <div
      className={clsx(styles.banner, sizeStyles[size], className)}
      style={{ backgroundImage: `url('/backgrounds/${background}')` }}
    >
      {children}
    </div>
  );
}
