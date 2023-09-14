import clsx from "clsx";

import { EventName } from "~/data/types";

import colors from "./colors";
import styles from "./index.module.css";

export interface EventThemeProps {
  children: React.ReactNode;
  event: EventName;
}

export interface EventColorProps {
  event: EventName;
}

export function EventTheme({ children, event }: EventThemeProps) {
  return (
    <div className={clsx(styles.eventTheme, styles[event])}>{children}</div>
  );
}

export function useEventColors(event: EventName) {
  return colors[event];
}
