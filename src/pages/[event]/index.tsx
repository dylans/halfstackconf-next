import Image from "next/future/image";
import Head from "next/head";

import { Anchor } from "../../components/Anchor";
import { Banner } from "../../components/Banner";
import { BannerText } from "../../components/BannerText";
import { EventSummary } from "../../components/EventSummary";
import { EventTheme } from "../../components/EventTheme";
import { Expectation } from "../../components/Expectation";
import { FindUs } from "../../components/FindUs";
import { SecondaryBanner } from "../../components/SecondaryBanner";
import { SessionsList } from "../../components/SessionsList";
import { SplitPromo } from "../../components/SplitPromo";
import { SponsorStacksList } from "../../components/SponsorStacksList";
import { Text } from "../../components/Text";
import { getEventDataCurrentAndDefault, getEvents } from "../../data";
import { ReturnedParams, ReturnedProps } from "../../utils";
import styles from "./index.module.css";

export default function Event({
  event: {
    afterparty = "Afterparty",
    date,
    description,
    geolocation,
    sessions,
    location,
    name,
    slug,
    sponsors,
    trailer,
    year,
  },
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <EventTheme event={slug}>
      <Head>
        <title>{`HalfStack | ${name}`}</title>
      </Head>
      <Banner background={`${slug}/full.png`}>
        <BannerText>
          <div className={styles.bannerImageArea}>
            <Image
              alt=""
              className={styles.bannerImage}
              fill
              src={`/backgrounds/${slug}/skyline.png`}
            />
          </div>
          {name}
        </BannerText>
        <Text fontSize="extra-large">{year}</Text>
      </Banner>

      <EventSummary
        afterparty={afterparty}
        date={date}
        location={location}
        trailer={trailer}
      />

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

      {geolocation && <FindUs geolocation={geolocation} />}
    </EventTheme>
  );
}

export async function getStaticProps({
  params: { event },
}: ReturnedParams<typeof getStaticPaths>) {
  return {
    props: {
      event: await getEventDataCurrentAndDefault(event),
    },
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
