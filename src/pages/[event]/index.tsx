import Head from "next/head";
import Image from "next/image";

import { Anchor } from "~/components/Anchor";
import { Banner } from "~/components/Banner";
import { BannerText } from "~/components/BannerText";
import { EventFooter } from "~/components/EventFooter";
import { EventHeader } from "~/components/EventHeader";
import { EventSummary } from "~/components/EventSummary";
import { EventTheme } from "~/components/EventTheme";
import { ExpectationPhotos } from "~/components/ExpectationPhotos";
import { FindUs } from "~/components/FindUs";
import { SecondaryBanner } from "~/components/SecondaryBanner";
import { SessionsList } from "~/components/SessionsList";
import { SplitPromo } from "~/components/SplitPromo";
import { SponsorStacksList } from "~/components/SponsorStacksList";
import { Text } from "~/components/Text";

import { getEventDataCurrentAndDefault, getEvents } from "../../data";
import { ReturnedParams, ReturnedProps } from "../../utils";
import styles from "./index.module.css";

export default function Event({
  event: {
    afterparty = "Afterparty",
    date = "TBD",
    description,
    geolocation,
    layoffs,
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
      <EventHeader slug={slug} />
      <Banner background={`${slug}/full.png`}>
        <BannerText>
          <div className={styles.bannerImageArea}>
            <Image
              alt=""
              className={styles.bannerImage}
              fill
              sizes="100vw"
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

      <ExpectationPhotos>
        <Text as="h2" className={styles.h2} fontSize="extra-large">
          What to Expect
        </Text>
        <Text as="p" className={styles.p} fontSize="medium">
          HalfStack events are fun, creative single track JavaScript events
          hosted in relaxed environments. HalfStack provides authentic, high
          value experiences for all attendees.
        </Text>
        <Text as="p" className={styles.p} fontSize="medium">
          The priority for HalfStack is the attendee experience, with great
          food, drinks, talks, swag, and community. Hosted by London’s
          longest-lived JavaScript meetup group, HalfStack now runs events in
          Belgrade, Charlotte, London, Newquay, New York, Phoenix, Tel Aviv, and
          Vienna!
        </Text>
        <Text as="p" className={styles.p} fontSize="medium">
          HalfStack carefully curates talks that inspire and inform the audience
          in a highly interactive and entertaining manner. Each HalfStack event
          provides an intimate feeling where each attendee has time to meet one
          another.
        </Text>
        {layoffs && (
          <>
            <Text as="h2" className={styles.h2} fontSize="extra-large">
              Financial Hardship?
            </Text>
            <Text as="p" className={styles.p} fontSize="medium">
              {layoffs}
            </Text>
          </>
        )}
      </ExpectationPhotos>

      <SecondaryBanner title="Call for Proposals">
        Visit our <Anchor href="/cfp">CfP page</Anchor> for more information on
        proposing your amazing HalfStack session!
      </SecondaryBanner>

      <SessionsList sessions={sessions} />

      {sponsors && <SponsorStacksList {...sponsors} slug={slug} />}

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
