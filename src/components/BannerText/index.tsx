import clsx from "clsx";

import { Text } from "../Text";
import styles from "./index.module.css";

export interface BannerTextProps {
  children: React.ReactNode;
  className?: string;
}

export function BannerText({ children, className }: BannerTextProps) {
  return (
    <Text as="h1" className={clsx(styles.bannerText, className)}>
      {children}
    </Text>
  );
}
