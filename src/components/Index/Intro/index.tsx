import { Banner } from "../../Banner";
import { BannerText } from "../../BannerText";
import { Text } from "../../Text";
import styles from "./index.module.css";

export function Intro() {
  return (
    <>
      <Banner size="medium" vibrant>
        <Text className={styles.tagline}>
          Fun, creative events with engaging topics for awesome web and JS
          people
        </Text>
        <Text className={styles.description}>
          Intimate single-day, single-track events, with a nice blend of local
          and visiting presenters, a chill vibe, no vendor pitches, good food
          and beverages, and an afterparty with our infamous JS Pub Quiz,
          karaoke, and of course, awesome people like you.
        </Text>
      </Banner>
    </>
  );
}
