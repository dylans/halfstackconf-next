import { BodyArea } from "../BodyArea";
import { LabeledIcons } from "../LabeledIcons";
import styles from "./index.module.css";

export interface EventSummaryProps {
  afterparty: string;
  date: string;
  location: string;
  trailer: string | undefined;
}

export function EventSummary({
  afterparty,
  date,
  location,
  trailer,
}: EventSummaryProps) {
  return (
    <div className={styles.eventInfo}>
      <BodyArea className={styles.contents}>
        <LabeledIcons
          icons={[
            {
              icon: "/icons/location.png",
              label: location,
            },
            {
              icon: "/icons/calendar.png",
              label: date,
            },
            {
              icon: "/icons/balloon.png",
              label: afterparty,
            },
          ]}
        />
        {trailer && (
          <iframe
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className={styles.trailer}
            frameBorder="0"
            height="337"
            src={trailer}
            title="Event Trailer"
            width="600"
          ></iframe>
        )}
      </BodyArea>
    </div>
  );
}
