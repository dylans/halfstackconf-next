import Head from "next/head";

import { Banner } from "~/components/Banner";
import { BannerText } from "~/components/BannerText";
import { EventFooter } from "~/components/EventFooter";
import { EventHeader } from "~/components/EventHeader";
import { EventSummary } from "~/components/EventSummary";
import { EventTheme } from "~/components/EventTheme";
import { SponsorshipDisclaimer } from "~/components/SponsorshipDisclaimer";
import { SponsorshipExpectations } from "~/components/SponsorshipExpectations";
import { SponsorshipPackages } from "~/components/SponsorshipPackages";
import { Text } from "~/components/Text";
import { WhySponsor } from "~/components/WhySponsor";

import { getEventDataCurrentAndDefault, getEvents } from "../../data";
import { getProspectusUri } from "../../urls";
import { ReturnedParams, ReturnedProps } from "../../utils";

export default function Spon({
  event: {
    afterparty = "Afterparty",
    date = "TBD",
    sponsorship,
    location,
    name,
    slug,
    trailer,
    year,
  },
}: ReturnedProps<typeof getStaticProps>) {
  const prospectus = sponsorship.available
    ? getProspectusUri(slug, year)
    : undefined;

  return (
    <EventTheme event={slug}>
      <Head>
        <title>{`HalfStack | ${name} Sponsorship`}</title>
      </Head>
      <EventHeader slug={slug} />
      <Banner background={`${slug}/full.png`}>
        <BannerText>Sponsorship</BannerText>
        <Text fontSize="extra-large">
          {name} {year}
        </Text>
      </Banner>

      <EventSummary
        afterparty={afterparty}
        date={date}
        location={location ?? name}
        trailer={trailer}
      />

      <SponsorshipExpectations
        expectations={sponsorship.expectations}
        prospectus={prospectus}
      />

      <WhySponsor />

      <SponsorshipPackages currency={sponsorship.currency} />

      <SponsorshipDisclaimer prospectus={prospectus} />

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
