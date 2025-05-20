import { EventDataJoined } from "~/data/types";

import { EventCard } from "../../EventCard";
import { EventTheme } from "../../EventTheme";
import { TextLink } from "../../TextLink";
import { Text } from "../../Text";
import styles from "./index.module.css";

export interface EventsListProps {
  events: EventDataJoined[];
}

export function EventsList({ events }: EventsListProps) {
  return (
    <div className={styles.eventsList}>
      <div className={styles.eventCards}>
        {events.map((event) => (
          <EventTheme event={event.slug} key={event.slug}>
            <EventCard direction="left-to-right" event={event} />
          </EventTheme>
        ))}
      </div>
    </div>
  );
}
