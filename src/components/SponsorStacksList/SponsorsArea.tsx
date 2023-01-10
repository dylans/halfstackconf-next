import React from "react";

import { Text } from "../Text";
import styles from "./SponsorsArea.module.css";

export interface SponsorsAreaProps {
  children: React.ReactNode;
  title: React.ReactNode;
}

export function SponsorsArea({ children, title }: SponsorsAreaProps) {
  return (
    <div className={styles.sponsorsArea}>
      <div className={styles.contents}>
        <Text as="h2" className={styles.title} fontSize="banner" id="spon">
          {title}
        </Text>
        {children}
      </div>
    </div>
  );
}
