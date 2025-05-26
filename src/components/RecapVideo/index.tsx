import Link from "next/link";
import { Card } from "../Card";
import styles from "./index.module.css";

interface RecapVideoProps {
  trailerUrl: string;
  eventName: string;
  linkText?: string;
}

export function RecapVideo({
  trailerUrl,
  eventName,
  linkText = "Watch Video",
}: RecapVideoProps) {
  const watchUrl = trailerUrl.replace("/embed/", "/watch?v=");

  return (
    <Card
      as={Link}
      bottom={linkText}
      className={styles.videoCard}
      direction="left-to-right"
      href={watchUrl}
      target="_blank"
    >
      <div className={styles.videoWrapper}>
        <iframe
          className={styles.videoIframe}
          src={trailerUrl}
          title={`${eventName} Trailer`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Card>
  );
}
