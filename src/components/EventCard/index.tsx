import { StaticImageData } from "next/future/image";
import Link from "next/link";

import styles from "./index.module.css";

export interface EventCardProps {
  background: StaticImageData;
  date: string;
  description: string;
  href: string;
  thumbnail: StaticImageData;
  title: string;
}

export function EventCard({
  background,
  date,
  description,
  href,
  thumbnail,
  title,
}: EventCardProps) {
  return (
    <Link className={styles.eventCard} href={href}>
      <div className={styles.cardContents}>
        <div
          className={styles.background}
          style={{ backgroundImage: `url('${background.src}')` }}
        />
        <div className={styles.textContents}>
          <div className={styles.title}>{title}</div>
          <div className={styles.date}>{date}</div>
          <div className={styles.description}>{description}</div>
        </div>
        <div
          className={styles.thumbnail}
          style={{ backgroundImage: `url('${thumbnail.src}')` }}
        />
      </div>
      <div className={styles.booker}>Book your Tickets</div>
    </Link>
  );
}
