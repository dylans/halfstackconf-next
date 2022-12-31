import { EventCard } from "../../EventCard";
import { EventTheme } from "../../EventTheme";
import styles from "./index.module.css";

export interface EventsListProps {
  events: EventListData[];
}

export interface EventListData {
  date: string;
  description: string;
  name: string;
  title: string;
}

export function EventsList({ events }: EventsListProps) {
  return (
    <div className={styles.eventsList}>
      <div className={styles.eventCards}>
        {events.map((event, i) => (
          <EventTheme event={event.name} key={event.name}>
            <EventCard
              {...event}
              direction={i % 2 === 0 ? "left-to-right" : "right-to-left"}
            />
          </EventTheme>
        ))}
      </div>
    </div>
  );
}
