import { Text } from "../Text";
import styles from "./index.module.css";

export function CopyrightFooter() {
  return (
    <Text as="div" className={styles.copyrightFooter} fontSize="extra-small">
      Copyright © Open Web Conferences, LLC, {new Date().getFullYear()}. All
      rights reserved.
    </Text>
  );
}
