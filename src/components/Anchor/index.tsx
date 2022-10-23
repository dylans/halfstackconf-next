import clsx from "clsx";
import Link, { LinkProps } from "next/link";

import styles from "./index.module.css";

export interface AnchorProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  variant?: AnchorVariant;
}

export type AnchorVariant = keyof typeof variantStyles;

export const variantStyles = {
  inline: styles.variantInline,
  underlined: styles.variantUnderlined,
};

export function Anchor({
  className,
  variant = "underlined",
  ...props
}: AnchorProps) {
  return (
    <Link
      className={clsx(styles.anchor, variantStyles[variant], className)}
      {...props}
    />
  );
}
