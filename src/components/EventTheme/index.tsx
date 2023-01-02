import clsx from "clsx";

import styles from "./index.module.css";

export interface EventThemeProps {
  children: React.ReactNode;
  event: string;
}

export function EventTheme({ children, event }: EventThemeProps) {
  return (
    <div className={clsx(styles.eventTheme, styles[event])}>{children}</div>
  );
}
