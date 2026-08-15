import clsx from "clsx";

import { EventSession } from "~/data/types";

import { BodyArea } from "../BodyArea";
import { SessionCard } from "../SessionCard";
import { Text } from "../Text";
import styles from "./index.module.css";

const defaultIntro =
  "Each of our events has between 8 and 12 sessions. We update our presenter information regularly. We usually save a few details to give you some surprises on the day of the event, including the order of the sessions.";

export interface SessionsListProps {
  className?: string;
  intro?: string | null;
  sessions: EventSession[] | undefined;
  title?: string;
}

export function SessionsList({
  className,
  intro = defaultIntro,
  sessions,
  title = "Our Illustrious Presenters",
}: SessionsListProps) {
  if (!sessions?.length) {
    return null;
  }

  return (
    <BodyArea className={clsx(styles.sessionsList, className)}>
      <Text as="h2" className={styles.h2} fontSize="banner">
        {title}
      </Text>
      {intro && (
        <Text as="p" className={styles.p} fontSize="medium">
          {intro}
        </Text>
      )}
      <ul className={styles.sessions}>
        {sessions.map((session) => (
          <SessionCard
            className={styles.sessionCard}
            key={session.by}
            {...session}
          />
        ))}
      </ul>
    </BodyArea>
  );
}
