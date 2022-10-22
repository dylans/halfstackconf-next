import clsx from "clsx";

import styles from "./index.module.css";

export type TextProps<As extends React.ElementType> = {
  as?: As;
  children?: React.ReactNode;
  className?: string;
  fontSize?: FontSize;
} & React.ComponentPropsWithoutRef<As>;

export type FontSize = keyof typeof fontStyles;

const fontStyles = {
  banner: styles.fontBanner,
  "extra-small": styles.fontExtraSmall,
  small: styles.fontSmall,
  medium: styles.fontMedium,
  large: styles.fontLarge,
  "extra-large": styles.fontExtraLarge,
};

export const Text = <As extends React.ElementType = "span">({
  as,
  className,
  fontSize = "medium",
  ...props
}: TextProps<As>) => {
  const As = as ?? "span";

  return (
    <As
      className={clsx(className, styles.text, fontStyles[fontSize])}
      {...props}
    />
  );
};
