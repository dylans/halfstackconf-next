import React from "react";
import Link from "next/link";
import { Card } from "../Card";
import styles from "./index.module.css";

export function RecapVideo() {
  return (
    <Card
      as={Link}
      bottom="Watch Video"
      className={styles.videoCard}
      direction="left-to-right"
      href="https://www.youtube.com/watch?v=RfXtq8EUSms"
      target="_blank"
    >
      <div className={styles.videoWrapper}>
        <iframe
          className={styles.videoIframe}
          src="https://www.youtube.com/embed/RfXtq8EUSms"
          title="HalfStack Vienna Recap Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </Card>
  );
}
