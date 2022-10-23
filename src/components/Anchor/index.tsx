import clsx from "clsx";
import Link, { LinkProps } from "next/link";

import styles from "./index.module.css";

export interface AnchorProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
}

export function Anchor({ className, ...props }: AnchorProps) {
  return <Link className={clsx(styles.anchor, className)} {...props} />;
}
