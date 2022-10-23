import { EventCard } from "../../EventCard";
import charlotteBackground from "./assets/charlotteBackground.png";
import charlotteThumbnail from "./assets/charlotteThumbnail.jpg";
import londonBackground from "./assets/londonBackground.png";
import londonOnTheThamesThumbnail from "./assets/londonOnTheThamesThumbnail.jpg";
import londonThumbnail from "./assets/londonThumbnail.jpg";
import newquayBackground from "./assets/newquayBackground.png";
import newquayThumbnail from "./assets/newquayThumbnail.jpg";
import newYorkBackground from "./assets/newYorkBackground.png";
import newYorkThumbnail from "./assets/newYorkThumbnail.jpg";
import phoenixBackground from "./assets/phoenixBackground.png";
import phoenixThumbnail from "./assets/phoenixThumbnail.jpg";
import telAvivBackground from "./assets/telAvivBackground.png";
import telAvivThumbnail from "./assets/telAvivThumbnail.jpg";
import viennaBackground from "./assets/viennaBackground.png";
import viennaThumbnail from "./assets/viennaThumbnail.jpg";
import styles from "./index.module.css";

const events = [
  {
    background: londonBackground,
    backgroundColor: "--color-backdrop-london",
    date: "16th of November, 2022",
    description:
      "Our first fully indoor event since COVID in Shoreditch in November.",
    direction: "left-to-right",
    href: "/london",
    title: "HalfStack on the Shore(ditch) (London)",
    thumbnail: londonThumbnail,
  },
  {
    background: phoenixBackground,
    backgroundColor: "--color-backdrop-phoenix",
    date: "3rd of February, 2023",
    description:
      "The second HalfStack Phoenix at the Majestic Theater Gilbert.",
    href: "/phoenix",
    title: "Phoenix",
    thumbnail: phoenixThumbnail,
  },
  {
    background: telAvivBackground,
    backgroundColor: "--color-backdrop-telaviv",
    date: "TBD 2023",
    description:
      "Delayed to 2023 due to COVID-19. The first HalfStack Tel Aviv will happen as soon as it's safe to have in-person events again. Tickets now available for an incredible day of JS!",
    href: "/telaviv",
    title: "Tel Aviv",
    thumbnail: telAvivThumbnail,
  },
  {
    background: charlotteBackground,
    backgroundColor: "--color-backdrop-charlotte",
    date: "TBD 2023",
    description:
      "The first ever HalfStack Charlotte event. Tickets now available for an incredible day of JS! New date TBD in 2023 due to COVID-19.",
    href: "/charlotte",
    title: "Charlotte",
    thumbnail: charlotteThumbnail,
  },
  {
    background: newYorkBackground,
    backgroundColor: "--color-backdrop-newyork",
    date: "TBD August 2023",
    description:
      "Delayed to 2023 due to COVID-19. We'll let you know when we know more.",
    href: "/newyork",
    title: "New York",
    thumbnail: newYorkThumbnail,
  },
  {
    background: viennaBackground,
    backgroundColor: "--color-backdrop-vienna",
    date: "TBD 2023",
    description:
      "Delayed due to COVID-19. HalfStack Vienna will return in 2023 at Ankersaal near the Hauptbahnof",
    href: "/vienna",
    title: "Vienna",
    thumbnail: viennaThumbnail,
  },
  {
    background: newquayBackground,
    backgroundColor: "--color-backdrop-newquay",
    date: "23rd of June, 2023",
    description:
      "We just concluded our first event in Newquay after a two-year COVID-induced delay. Stay tuned for details for our plans for 2023!",
    href: "/newquay",
    title: "HalfStack at the Beach (Newquay)",
    thumbnail: newquayThumbnail,
  },
  {
    background: londonBackground,
    backgroundColor: "--color-backdrop-emphasized",
    date: "TBD 2023",
    description:
      "We just concluded our outdoor London event. Stay tuned for details for our plans for 2023.",
    href: "/london-on-the-thames",
    title: "HalfStack on the Thames (London)",
    thumbnail: londonOnTheThamesThumbnail,
  },
];

export function EventsList() {
  return (
    <div className={styles.eventsList}>
      <div className={styles.eventCards}>
        {events.map((event, i) => (
          <EventCard
            {...event}
            direction={i % 2 === 0 ? "left-to-right" : "right-to-left"}
            key={event.title}
          />
        ))}
      </div>
    </div>
  );
}
