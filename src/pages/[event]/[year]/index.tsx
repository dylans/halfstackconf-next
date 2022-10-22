import Head from "next/head";

import { Banner } from "../../../components/Banner";
import { BannerText } from "../../../components/BannerText";
import { BodyArea } from "../../../components/BodyArea";
import { Text } from "../../../components/Text";
import { getEventData, getEvents, getEventYears } from "../../../data";
import { ReturnedParams, ReturnedProps } from "../../../utils";
import styles from "./index.module.css";

export default function EventYear({
  event,
  date,
  name,
  year,
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>Past Events</title>
      </Head>
      <Banner background={`${event}.png`}>
        <BannerText>{name}</BannerText>
        <Text fontSize="large">{year}</Text>
      </Banner>

      <BodyArea className={styles.event}>
        <Text as="h2" fontSize="large">
          HalfStack {name} {year} - {date}
        </Text>
      </BodyArea>
    </>
  );
}

export async function getStaticProps({
  params: { event, year },
}: ReturnedParams<typeof getStaticPaths>) {
  const [defaultData, yearData] = await Promise.all([
    getEventData(event, "default"),
    getEventData(event, +year),
  ]);
  return {
    props: { ...defaultData, ...yearData, event, year },
  };
}

export async function getStaticPaths() {
  const events = await getEvents();
  const eventYears = (
    await Promise.all(
      events.flatMap(async (event) =>
        (
          await getEventYears(event)
        ).map((year) => ({ params: { event, year: `${year}` } }))
      )
    )
  ).flat();

  return {
    fallback: false,
    paths: eventYears,
  };
}
