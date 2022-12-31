import clsx from "clsx";
import Link from "next/link";

import { Card, CardDirection } from "../Card";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface EventCardProps {
  date: string;
  description: string;
  direction: CardDirection;
  name: string;
  title: string;
}

const directionStyles = {
  "left-to-right": styles.leftToRight,
  "right-to-left": styles.rightToLeft,
};

export function EventCard({
  date,
  description,
  direction,
  name,
  title,
}: EventCardProps) {
  return (
    <Card
      as={Link}
      bottom="Book your Tickets"
      className={clsx(styles.eventCard, directionStyles[direction])}
      direction={direction}
      href={`/${name}`}
    >
      <div className={styles.background} />
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
      <div className={styles.thumbnail} />
    </Card>
  );
}
