import Head from "next/head";
import Image from "next/image";

import { Anchor } from "~/components/Anchor";
import { Banner } from "~/components/Banner";
import { BannerText } from "~/components/BannerText";
import { Columns } from "~/components/Columns";
import { EventFooter } from "~/components/EventFooter";
import { EventHeader } from "~/components/EventHeader";
import { EventSummary } from "~/components/EventSummary";
import { EventTheme } from "~/components/EventTheme";
import { ExpectationPhotos } from "~/components/ExpectationPhotos";
import { FindUs } from "~/components/FindUs";
import { VideoEmbed } from "~/components/VideoEmbed";
import { SecondaryBanner } from "~/components/SecondaryBanner";
import { SessionsList } from "~/components/SessionsList";
import { SplitPromo } from "~/components/SplitPromo";
import { SponsorStacksList } from "~/components/SponsorStacksList";
import { Text } from "~/components/Text";
import { Tito } from "~/components/TicketsOffer/Tito";

import { getEventDataCurrentAndDefault, getEvents } from "../../data";
import { ReturnedParams, ReturnedProps } from "../../utils";
import styles from "./index.module.css";

export default function Event({
  event: {
    afterparty = "Afterparty",
    code,
    date = "TBD",
    dateString,
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
      <EventHeader dateString={dateString} slug={slug} />
      <Banner background={`${slug}/full.png`} size="medium">
        <BannerText>{name}</BannerText>
        <Text fontSize="extra-large">{year}</Text>
      </Banner>

      <EventSummary
        afterparty={afterparty}
        date={date}
        location={location ?? name}
        trailer={trailer}
      />

      <SplitPromo description={description} src="/events/attendance.jpg" />

      <div className={styles.videoTicketsSection}>
        <Columns className={styles.whatToExpect}>
          <div className={styles.left}>
            {trailer && <VideoEmbed src={trailer} title={`${name} Trailer`} />}
          </div>
          <Tito code={code} />
        </Columns>
      </div>

      <SessionsList sessions={sessions} />

      <ExpectationPhotos />

      {sponsors && <SponsorStacksList {...sponsors} slug={slug} />}

      <SecondaryBanner title="Call for Proposals and Fair Pricing">
        Visit our <Anchor href="/cfp">CfP page</Anchor> for more information on
        proposing your amazing HalfStack session! Visit our{" "}
        <Anchor href="/pricing">Pricing page</Anchor> to understand what we
        charge and why.
      </SecondaryBanner>

      {geolocation && <FindUs geolocation={geolocation} slug={slug} />}

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

export function getStaticPaths() {
  return {
    fallback: false,
    paths: getEvents().map((event) => ({
      params: { event },
    })),
  };
}
