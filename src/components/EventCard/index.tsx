import clsx from "clsx";
import { StaticImageData } from "next/future/image";
import Link from "next/link";

import { Card, CardDirection } from "../Card";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface EventCardProps {
  background: StaticImageData;
  backgroundColor: string;
  date: string;
  description: string;
  direction: CardDirection;
  href: string;
  thumbnail: StaticImageData;
  title: string;
}

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
    <Card
      as={Link}
      backgroundColor={backgroundColor}
      bottom="Book your Tickets"
      className={clsx(styles.eventCard, directionStyles[direction])}
      direction={direction}
      href={href}
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
    </Card>
  );
}
