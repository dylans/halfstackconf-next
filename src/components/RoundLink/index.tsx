import clsx from "clsx";
import React from "react";

import styles from "./index.module.css";

export interface MinimumProps {
  children?: React.ReactNode;
  className?: string;
}

export interface RoundLinkProps extends MinimumProps {
  [i: string]: unknown;
  as?: React.ElementType | React.ComponentType<MinimumProps>;
  size?: RoundLinkSize;
  variant?: "default" | "shadow";
}

export type RoundLinkSize = keyof typeof sizeStyles;

const sizeStyles = {
  medium: styles.sizeMedium,
  small: styles.sizeSmall,
};

export function RoundLink({
  as: As = "div",
  children,
  className,
  size = "medium",
  variant,
  ...props
}: RoundLinkProps) {
  return (
    <As
      {...props}
      className={clsx(
        className,
        styles.roundLink,
        sizeStyles[size],
        variant === "shadow" && styles.shadow
      )}
    >
      {children} <span role="presentation">{"/>"}</span>
    </As>
  );
}
