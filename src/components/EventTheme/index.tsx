export interface EventThemeProps {
  children: React.ReactNode;
  event: string;
}

import styles from "./index.module.css";

export function EventTheme({ children, event }: EventThemeProps) {
  return <div className={styles[event]}>{children}</div>;
}
