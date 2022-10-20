import clsx from "clsx";

import styles from "./index.module.css";

export function RoundLink({ as: As, children, className, ...props }) {
  return (
    <As {...props} className={clsx(className, styles.roundLink)}>
      {children} <span role="presentation">{"/>"}</span>
    </As>
  );
}
