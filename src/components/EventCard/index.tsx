import clsx from "clsx";
import Link from "next/link";

import { EventDataJoined } from "~/data/types";

import { Card, CardDirection } from "../Card";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface EventCardProps {
  direction: CardDirection;
  event: EventDataJoined;
}

const directionStyles = {
  "left-to-right": styles.leftToRight,
  "right-to-left": styles.rightToLeft,
};

export function EventCard({
  event: { catchphrase, date, description, name, slug },
  direction,
}: EventCardProps) {
  return (
    <Card
      as={Link}
      bottom="Book your Tickets"
      className={clsx(styles.eventCard, directionStyles[direction])}
      direction={direction}
      href={`/${slug}`}
    >
      <div className={styles.background} />
      <div className={styles.textContents}>
        <Text as="div" className={styles.title}>
          {name}
        </Text>
        <Text as="div" className={styles.date}>
          {date}
        </Text>
        <Text as="div" className={styles.description}>
          {catchphrase ?? description.join(" ")}
        </Text>
      </div>
      <div className={styles.thumbnail} />
    </Card>
  );
}
