import { EventDataJoined } from "~/data/types";

import { EventCard } from "../../EventCard";
import { EventTheme } from "../../EventTheme";
import styles from "./index.module.css";

export interface EventsListProps {
  events: EventDataJoined[];
}

export function EventsList({ events }: EventsListProps) {
  return (
    <div className={styles.eventsList}>
      <div className={styles.eventCards}>
        {events.map((event, i) => (
          <EventTheme event={event.slug} key={event.slug}>
            <EventCard
              direction={i % 2 === 0 ? "left-to-right" : "right-to-left"}
              event={event}
            />
          </EventTheme>
        ))}
      </div>
    </div>
  );
}
