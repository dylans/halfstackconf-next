import { Banner } from "../../Banner";
import { BannerText } from "../../BannerText";
import styles from "../../Index/EventsList/index.module.css";
import { Text } from "../../Text";

export function Intro() {
  return (
    <>
      <Banner size="large" vibrant>
        <BannerText>Welcome to HalfStack</BannerText>
      </Banner>
      <div className={styles.eventsList}>
        <div className={styles.eventCards}>
          <div className={styles.update}>
            <Text as="p" className={styles.updateParagraph}>
              While there is much to be excited about, it has been an incredibly
              challenging year with several prolonged wars, widespread layoffs
              in the tech ecosystem, substantial inflation, and diminished
              travel and sponsorship budgets.
            </Text>
            <Text as="p" className={styles.updateParagraph}>
              We are carefully evaluating each event this year and next year to
              determine which events we can host without running out of funds.
              London and Phoenix are certain, New York is likely to return,
              Belgrade, Newquay, and Vienna are postponed until 2025, and
              Charlotte and Tel Aviv are delayed indefinitely.
            </Text>
            <Text as="p" className={styles.updateParagraph}>
              The best way to make HalfStack happen in your city of choice is to
              book your ticket early (either upfront or as a monthly
              subscription) and help convince others to participate and sponsor.
              If breaking even looks unlikely 2-3 months in advance then we will
              likely postpone the event by 12 months. Note that our ticket sales
              have a very friendly exchange and refund policy.
            </Text>
          </div>
        </div>
      </div>
    </>
  );
}
