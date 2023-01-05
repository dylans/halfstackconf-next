import Link from "next/link";

import { BodyArea } from "../BodyArea";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface EventScheduleProps {
  packet: string | undefined;
  schedule: string;
  slug: string;
}

export function EventSchedule({ packet, schedule, slug }: EventScheduleProps) {
  return (
    <BodyArea>
      <Text as="p" className={styles.p}>
        {schedule}
      </Text>
      {packet && (
        <Text as="p" className={styles.p}>
          View the full <Link href={packet}>attendee information packet</Link>{" "}
          once you have your ticket.
        </Text>
      )}
      <Text as="p" className={styles.p}>
        See the <Link href={`/${slug}`}>main page</Link> for the full list of
        sessions. We don&apos;t announce the exact order in advance.
      </Text>
    </BodyArea>
  );
}
