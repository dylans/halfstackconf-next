import Image from "next/future/image";
import Head from "next/head";

import { Anchor } from "../../components/Anchor";
import { Banner } from "../../components/Banner";
import { BannerText } from "../../components/BannerText";
import { EventFooter } from "../../components/EventFooter";
import { EventSummary } from "../../components/EventSummary";
import { EventTheme } from "../../components/EventTheme";
import { Expectation } from "../../components/Expectation";
import { FindUs } from "../../components/FindUs";
import { Header } from "../../components/Header";
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
    date = "TBD",
    description,
    geolocation,
    location,
    name,
    sessions,
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
      <Header variant="inverted" />
      <Banner background={`${slug}/full.png`}>
        <BannerText>
          <div className={styles.bannerImageArea}>
            <Image
              alt=""
              className={styles.bannerImage}
              fill
              src={`/events/${slug}/skyline.png`}
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

      <SplitPromo description={description} src="/events/attendance.jpg" />

      <Expectation />

      <SecondaryBanner title="Call for Proposals">
        Visit our <Anchor href="/cfp">CfP page</Anchor> for more information on
        proposing your amazing HalfStack session!
      </SecondaryBanner>

      <SessionsList sessions={sessions} />

      <SponsorStacksList {...sponsors} />

      <FindUs geolocation={geolocation} slug={slug} />

      <EventFooter slug={slug} />
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
