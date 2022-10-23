import clsx from "clsx";

import { EventSession } from "../../data/types";
import { BodyArea } from "../BodyArea";
import { SessionCard } from "../SessionCard";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface SessionsListProps {
  className?: string;
  sessions: EventSession[];
}

export function SessionsList({ className, sessions }: SessionsListProps) {
  return (
    <BodyArea className={clsx(styles.sessionsList, className)}>
      <Text as="h2" className={styles.h2} fontSize="banner">
        Our Illustrious Speakers
      </Text>
      <ul className={styles.sessions}>
        {sessions.map((session, i) => (
          <SessionCard
            className={styles.sessionCard}
            direction={i % 2 === 0 ? "left-to-right" : "right-to-left"}
            key={session.by}
            {...session}
          />
        ))}
      </ul>
    </BodyArea>
  );
}
