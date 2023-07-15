import clsx from "clsx";

import { EventSession } from "~/data/types";

import { BodyArea } from "../BodyArea";
import { SessionCard } from "../SessionCard";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface SessionsListProps {
  className?: string;
  sessions: EventSession[] | undefined;
}

export function SessionsList({ className, sessions }: SessionsListProps) {
  if (!sessions?.length) {
    return null;
  }

  return (
    <BodyArea className={clsx(styles.sessionsList, className)}>
      <Text as="h2" className={styles.h2} fontSize="banner">
        Our Illustrious Speakers
      </Text>
      <Text as="p" className={styles.p} fontSize="medium">
        Each of our events has between 8 and 12 sessions. We update our speaker
        information regularly. We usually save a few details to give you some
        surprises on the day of the event, including the order of the sessions.
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
