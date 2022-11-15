import Image from "next/future/image";
import Head from "next/head";

import { Anchor } from "../../components/Anchor";
import { Banner } from "../../components/Banner";
import { BannerText } from "../../components/BannerText";
import { ColorMode } from "../../components/ColorMode";
import { EventSummary } from "../../components/EventSummary";
import { Expectation } from "../../components/Expectation";
import { FindUs } from "../../components/FindUs";
import { SecondaryBanner } from "../../components/SecondaryBanner";
import { SessionsList } from "../../components/SessionsList";
import { SplitPromo } from "../../components/SplitPromo";
import { SponsorStacksList } from "../../components/SponsorStacksList";
import { Text } from "../../components/Text";
import { getEventData, getEvents } from "../../data";
import { ReturnedParams, ReturnedProps } from "../../utils";
import styles from "./index.module.css";

export default function Event({
  afterparty = "Afterparty",
  date,
  description,
  geolocation,
  sessions,
  event,
  location,
  name,
  sponsors,
  year,
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <ColorMode mode={event}>
      <Head>
        <title>{`HalfStack | ${name}`}</title>
      </Head>
      <Banner background={`${event}.png`}>
        <BannerText>
          <div className={styles.bannerImageArea}>
            <Image
              alt=""
              className={styles.bannerImage}
              fill
              src={`/outlines/london.png`}
            />
          </div>
          {name}
        </BannerText>
        <Text fontSize="extra-large">{year}</Text>
      </Banner>

      <EventSummary afterparty={afterparty} date={date} location={location} />

      <SplitPromo description={description} src="/backgrounds/attendance.jpg" />

      <Expectation>
        Quick update: We&apos;ve changed the date from the 18th to the 16th to
        avoid colliding with another conference in London on the 17th and 18th.
      </Expectation>

      <SecondaryBanner title="Call for Proposals">
        Visit our <Anchor href="/cfp">CfP page</Anchor> for more information on
        proposing your amazing HalfStack session!
      </SecondaryBanner>

      <SessionsList sessions={sessions} />

      <SponsorStacksList {...sponsors} />

      <FindUs geolocation={geolocation} />
    </ColorMode>
  );
}

export async function getStaticProps({
  params: { event },
}: ReturnedParams<typeof getStaticPaths>) {
  const [currentData, defaultData] = await Promise.all([
    getEventData(event, "current"),
    getEventData(event, "default"),
  ]);
  return {
    props: { ...currentData, ...defaultData, event },
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: (await getEvents()).map((event) => ({
      params: { event },
    })),
  };
}
