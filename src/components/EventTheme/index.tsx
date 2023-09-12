import clsx from "clsx";

import colors from "./colors";
import styles from "./index.module.css";

export interface EventThemeProps {
  children: React.ReactNode;
  event: string;
}

export interface EventColorProps {
  event: string;
}

export function EventTheme({ children, event }: EventThemeProps) {
  return (
    <div className={clsx(styles.eventTheme, styles[event])}>{children}</div>
  );
}

export function EventColors({ event }: EventColorProps) {
  return colors[event];
}
