import clsx from "clsx";
import Image from "next/legacy/image";

import { Columns } from "../Columns";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface SplitPromoProps {
  className?: string;
  description: string[];
  src: string;
}

export function SplitPromo({ className, description, src }: SplitPromoProps) {
  return (
    <Columns className={clsx(styles.splitPromo, className)}>
      <div className={styles.imageArea}>
        <Image alt="" className={styles.image} fill src={src} />
      </div>
      <div className={styles.description}>
        {description.map((child) => (
          <Text key={child}>{child}</Text>
        ))}
      </div>
    </Columns>
  );
}
