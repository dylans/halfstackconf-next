import clsx from "clsx";
import React from "react";

import { RoundLink, RoundLinkSize } from "../RoundLink";
import { PolymorphicProps } from "../types";
import styles from "./index.module.css";

export type CardProps<As extends React.ElementType> = PolymorphicProps<
  As,
  {
    as?: As;
    backgroundColor?: string;
    bottom?: string;
    className?: string;
    direction?: CardDirection;
    size?: RoundLinkSize;
  }
>;

export type CardDirection = keyof typeof directionStyles;

const directionStyles = {
  "left-to-right": styles.leftToRight,
  "right-to-left": styles.rightToLeft,
};

const sizeStyles = {
  small: styles.sizeSmall,
  medium: styles.sizeMedium,
};

export const Card = <As extends React.ElementType>({
  as,
  className,
  backgroundColor = "--color-backdrop",
  bottom,
  children,
  direction = "left-to-right",
  size = "medium",
  ...props
}: CardProps<As>) => {
  const As = as ?? "div";

  return (
    <As
      className={clsx(
        className,
        styles.card,
        directionStyles[direction],
        sizeStyles[size]
      )}
      {...props}
    >
      <div
        className={styles.cardContents}
        style={{ backgroundColor: `var(${backgroundColor})` }}
      >
        {children}
      </div>
      <RoundLink
        className={styles.bottom}
        size={size}
        style={{ color: `var(${backgroundColor})` }}
        variant={size === "small" ? "shadow" : "default"}
      >
        {bottom}
      </RoundLink>
    </As>
  );
};
