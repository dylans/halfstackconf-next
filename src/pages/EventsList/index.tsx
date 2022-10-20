import { EventCard } from "../../components/EventCard";
import londonBackground from "./assets/londonBackground.png";
import londonThumbnail from "./assets/londonThumbnail.jpg";
import styles from "./index.module.css";

const events = [
  {
    background: londonBackground,
    date: "16th of November, 2022",
    description:
      "Our first fully indoor event since COVID in Shoreditch in November.",
    href: "/london",
    title: "HalfStack on the Shore(ditch) (London)",
    thumbnail: londonThumbnail,
  },
];

export function EventsList() {
  return (
    <div className={styles.eventsList}>
      <div className={styles.eventCards}>
        {events.map((event) => (
          <EventCard {...event} key={event.title} />
        ))}
      </div>
    </div>
  );
}
