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
      </BodyArea>
    </div>
  );
}
