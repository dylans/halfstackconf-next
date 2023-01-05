import Head from "next/head";
import Link from "next/link";

import { Banner } from "../../../components/Banner";
import { BannerText } from "../../../components/BannerText";
import { BodyArea } from "../../../components/BodyArea";
import { Columns } from "../../../components/Columns";
import { EventTheme } from "../../../components/EventTheme";
import { Footer } from "../../../components/Footer";
import { Header } from "../../../components/Header";
import { SponsorStacksList } from "../../../components/SponsorStacksList";
import { Text } from "../../../components/Text";
import { VideoCard } from "../../../components/VideoCard";
import { getEventData, getEvents, getEventYears } from "../../../data";
import { ReturnedParams, ReturnedProps } from "../../../utils";
import styles from "./index.module.css";

export default function EventYear({
  date,
  event,
  name,
  otherEvents,
  sponsors,
  videos,
  year,
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <EventTheme event={event}>
      <Head>
        <title>{`HalfStack ${name} ${year}`}</title>
      </Head>
      <Header />
      <Banner background={`${event}/full.png`}>
        <BannerText>Past Events</BannerText>
      </Banner>

      <BodyArea className={styles.event}>
        <Text as="h2" className={styles.h2} fontSize="large">
          HalfStack {name} {year} - {date}
        </Text>
        <Columns className={styles.topColumns}>
          <div>
            <Text as="h3" fontSize="medium">
              Recap
            </Text>
            <Text>
              HalfStack {year} was an amazing event with an incredible speaker
              lineup. View the videos and relive HalfStack {year}!
            </Text>
          </div>
          <div>
            <Text as="h3" fontSize="medium">
              Other Past Events
            </Text>
            <ul className={styles.eventsList}>
              {otherEvents.map((otherEvent) =>
                otherEvent.otherYears.map((otherYear) => (
                  <Text as="li" fontSize="small" key={otherYear}>
                    <Link
                      className={styles.otherEventLink}
                      href={`/${otherEvent.event}/${otherYear}`}
                    >
                      HalfStack {otherEvent.name} {otherYear}
                    </Link>
                  </Text>
                ))
              )}
            </ul>
          </div>
        </Columns>

        <Text as="h2" className={styles.h2} fontSize="large">
          Videos
        </Text>
        <ul className={styles.videosList}>
          {videos.map((video) => (
            <VideoCard className={styles.videoCard} key={video.by} {...video} />
          ))}
        </ul>

        {sponsors && <SponsorStacksList {...sponsors} />}
      </BodyArea>
      <Footer />
    </EventTheme>
  );
}

export async function getStaticProps({
  params: { event, year },
}: ReturnedParams<typeof getStaticPaths>) {
  const [defaultData, yearData] = await Promise.all([
    getEventData(event, "default"),
    getEventData(event, +year),
  ]);

  const otherEvents = await Promise.all(
    Object.entries(yearData.otherEvents).map(async ([event, otherYears]) => ({
      event,
      name: (await getEventData(event, "default")).name,
      otherYears,
    }))
  );

  return {
    props: { ...defaultData, ...yearData, event, otherEvents, year },
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
