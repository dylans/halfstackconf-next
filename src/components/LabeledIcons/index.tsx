import clsx from "clsx";
import Image from "next/image";

import { Columns } from "../Columns";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface LabeledIcon {
  icon: string;
  label: string;
}

export interface LabeledIconsProps {
  className?: string;
  icons: LabeledIcon[];
}

export function LabeledIcons({ className, icons }: LabeledIconsProps) {
  return (
    <Columns className={clsx(styles.labeledIcons, className)}>
      {icons.map(({ icon, label }) => (
        <div className={styles.labeledIcon} key={label}>
          <Image
            alt=""
            className={styles.icon}
            height={110}
            src={icon}
            width={110}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
          <Text as="div" className={styles.label}>
            {label}
          </Text>
        </div>
      ))}
    </Columns>
  );
}
