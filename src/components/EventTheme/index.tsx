import clsx from "clsx";

import { EventSlug } from "~/data/types";

import { colors } from "./colors";
import styles from "./index.module.css";

export interface EventThemeProps {
  children: React.ReactNode;
  event: EventSlug;
}

export interface EventColorProps {
  event: EventSlug;
}

export function EventTheme({ children, event }: EventThemeProps) {
  return (
    <div className={clsx(styles.eventTheme, styles[event])}>{children}</div>
  );
}

export function useEventColors(event: EventSlug) {
  return colors[event];
}
