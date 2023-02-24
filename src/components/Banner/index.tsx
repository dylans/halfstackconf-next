import clsx from "clsx";

import styles from "./index.module.css";

export interface BannerProps {
  background?: string;
  children: React.ReactNode;
  className?: string;
  size?: BannerSize;
  vibrant?: boolean;
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
  vibrant,
}: BannerProps) {
  return (
    <div className={clsx(styles.banner, sizeStyles[size], className)}>
      <div
        className={clsx(styles.backgroundImage, vibrant && styles.vibrant)}
        style={{ backgroundImage: `url('/events/${background}')` }}
      />
      <div className={styles.contents}>{children}</div>
    </div>
  );
}
