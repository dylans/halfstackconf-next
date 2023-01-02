import Head from "next/head";
import Link from "next/link";

import { Banner } from "../../components/Banner";
import { BannerText } from "../../components/BannerText";
import { BodyArea } from "../../components/BodyArea";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import {
  getEventData,
  getEvents as getEvents,
  getEventYears,
} from "../../data";
import { ReturnedProps } from "../../utils";
import styles from "./index.module.css";

export default function PastEvents({
  eventsData,
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>HalfStack | Past Events</title>
      </Head>
      <Header />
      <Banner>
        <BannerText>Past Events</BannerText>
      </Banner>
      <BodyArea className={styles.pastEvents}>
        {eventsData.map(([event, { name, years }]) => (
          <>
            <Text as="h2" fontSize="large" key={event}>
              {name}
            </Text>
            <ul className={styles.items}>
              {years
                .sort((a, b) => b - a)
                .map((year) => (
                  <Text as="li" className={styles.item} key={year}>
                    <Link className={styles.link} href={`/${event}/${year}`}>
                      HalfStack {name} {year}
                    </Link>
                  </Text>
                ))}
            </ul>
          </>
        ))}
      </BodyArea>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const events = await getEvents();
  const eventsData = await Promise.all(
    events.map(async (event) => {
      const [defaultData, years] = await Promise.all([
        getEventData(event, "default"),
        getEventYears(event),
      ]);
      return [event, { ...defaultData, years }] as const;
    })
  );

  return {
    props: {
      eventsData,
    },
  };
}
