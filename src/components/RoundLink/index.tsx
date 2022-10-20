import clsx from "clsx";
import React from "react";

import styles from "./index.module.css";

export interface MinimumProps {
  children?: React.ReactNode;
  className?: string;
}

export interface RoundLinkProps extends MinimumProps {
  [i: string]: unknown;
  as?: keyof JSX.IntrinsicElements | React.ComponentType<MinimumProps>;
}

export function RoundLink({
  as: As = "div",
  children,
  className,
  ...props
}: RoundLinkProps) {
  return (
    <As {...props} className={clsx(className, styles.roundLink)}>
      {children} <span role="presentation">{"/>"}</span>
    </As>
  );
}
