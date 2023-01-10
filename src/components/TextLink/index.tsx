import clsx from "clsx";
import Link, { LinkProps } from "next/link";

import styles from "./index.module.css";

export interface TextLinkProps extends React.PropsWithChildren<LinkProps> {
  className?: string;
  hovering?: boolean;
}

export function TextLink({ className, hovering, ...props }: TextLinkProps) {
  return (
    <Link
      className={clsx(styles.textLink, hovering && styles.hovering, className)}
      {...props}
    />
  );
}
