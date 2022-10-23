import Image from "next/future/image";

import { RoundLink } from "../RoundLink";
import { Text } from "../Text";
import { TintedImage } from "../TintedImage";
import styles from "./index.module.css";

export interface SecondaryBannerProps {
  children?: React.ReactNode;
  title: string;
}

export function SecondaryBanner({ children, title }: SecondaryBannerProps) {
  return (
    <div className={styles.secondaryBanner}>
      <div className={styles.contents}>
        <Text as="h2" fontSize="extra-large">
          {title}
        </Text>
        <Text as="h2" fontSize="medium">
          {children}
        </Text>
      </div>
    </div>
  );
}
