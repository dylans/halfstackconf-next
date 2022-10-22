import clsx from "clsx";
import { StaticImageData } from "next/future/image";
import Link from "next/link";

import { RoundLink } from "../RoundLink";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface EventCardProps {
  background: StaticImageData;
  backgroundColor: string;
  date: string;
  description: string;
  direction: EventCardDirection;
  href: string;
  thumbnail: StaticImageData;
  title: string;
}

export type EventCardDirection = keyof typeof directionStyles;

const directionStyles = {
  "left-to-right": styles.leftToRight,
  "right-to-left": styles.rightToLeft,
};

export function EventCard({
  background,
  backgroundColor,
  date,
  description,
  direction,
  href,
  thumbnail,
  title,
}: EventCardProps) {
  return (
    <Link
      className={clsx(styles.eventCard, directionStyles[direction])}
      href={href}
    >
      <div
        className={styles.cardContents}
        style={{ backgroundColor: `var(${backgroundColor})` }}
      >
        <div
          className={styles.background}
          style={{ backgroundImage: `url('${background.src}')` }}
        />
        <div className={styles.textContents}>
          <Text as="div" className={styles.title}>
            {title}
          </Text>
          <Text as="div" className={styles.date}>
            {date}
          </Text>
          <Text as="div" className={styles.description}>
            {description}
          </Text>
        </div>
        <div
          className={styles.thumbnail}
          style={{ backgroundImage: `url('${thumbnail.src}')` }}
        />
      </div>
      <RoundLink
        className={styles.booker}
        style={{ color: `var(${backgroundColor})` }}
      >
        Book your Tickets
      </RoundLink>
    </Link>
  );
}
