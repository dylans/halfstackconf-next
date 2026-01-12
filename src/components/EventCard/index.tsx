import Link from "next/link";

import { EventDataJoined } from "~/data/types";

import { Card } from "../Card";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface EventCardProps {
  direction: "left-to-right" | "right-to-left";
  event: EventDataJoined;
}

export function EventCard({ event: { date, name, slug } }: EventCardProps) {
  return (
    <Card
      as={Link}
      bottom="Book Tickets"
      className={styles.eventCard}
      direction="left-to-right"
      href={`/${slug}`}
    >
      <div className={styles.thumbnail} />
      <div className={styles.background} />
      <div className={styles.textContents}>
        <Text as="div" className={styles.title}>
          {name}
        </Text>
        <Text as="div" className={styles.date}>
          {date}
        </Text>
      </div>
    </Card>
  );
}
