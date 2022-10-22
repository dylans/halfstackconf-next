import Head from "next/head";
import Link from "next/link";

import { Banner } from "../../components/Banner";
import { BannerText } from "../../components/BannerText";
import { BodyArea } from "../../components/BodyArea";
import { Text } from "../../components/Text";
import styles from "./index.module.css";

export default function PastEvents({
  events,
}: Awaited<ReturnType<typeof getStaticProps>>["props"]) {
  return (
    <>
      <Head>
        <title>HalfStack | Past Events</title>
      </Head>
      <Banner>
        <BannerText>Past Events</BannerText>
      </Banner>
      <BodyArea className={styles.pastEvents}>
        {Object.entries(events).map(([slug, { name, years }]) => (
          <>
            <Text as="h2" fontSize="large" key={slug}>
              {name}
            </Text>
            <ul className={styles.items}>
              {years
                .sort((a, b) => b - a)
                .map((year) => (
                  <Text as="li" className={styles.item} key={year}>
                    <Link className={styles.link} href={`/${slug}/${year}`}>
                      HalfStack {name} {year}
                    </Link>
                  </Text>
                ))}
            </ul>
          </>
        ))}
      </BodyArea>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      events: (await import("../../data/events.json")).default,
    },
  };
}
