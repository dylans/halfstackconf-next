import clsx from "clsx";
import Link, { LinkProps } from "next/link";

import styles from "./index.module.css";

export interface TextLinkProps extends React.PropsWithChildren<LinkProps> {
  className?: string;
}

export function TextLink({ className, ...props }: TextLinkProps) {
  return <Link className={clsx(styles.textLink, className)} {...props} />;
}
