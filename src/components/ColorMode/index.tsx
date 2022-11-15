export interface ColorModeProps {
  children: React.ReactNode;
  mode: string;
}

import styles from "./index.module.css";

export function ColorMode({ children, mode }: ColorModeProps) {
  return <div className={styles[mode]}>{children}</div>;
}
