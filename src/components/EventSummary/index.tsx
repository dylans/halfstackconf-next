import { BodyArea } from "../BodyArea";
import { LabeledIcons } from "../LabeledIcons";
import styles from "./index.module.css";

export interface EventSummaryProps {
  afterparty: string;
  date: string;
  location: string;
}

export function EventSummary({
  afterparty,
  date,
  location,
}: EventSummaryProps) {
  return (
    <BodyArea className={styles.eventInfo}>
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
  );
}
