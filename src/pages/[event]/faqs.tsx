import Head from "next/head";

import { Banner } from "~/components/Banner";
import { BannerText } from "~/components/BannerText";
import { EventFAQs } from "~/components/EventFAQs";
import { EventFooter } from "~/components/EventFooter";
import { EventHeader } from "~/components/EventHeader";
import { EventTheme } from "~/components/EventTheme";
import { Text } from "~/components/Text";

import { getEventDataCurrentAndDefault, getEvents } from "../../data";
import { ReturnedParams, ReturnedProps } from "../../utils";

export default function Spon({
  event: { date, dateString, faqs, name, slug, year },
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <EventTheme event={slug}>
      <Head>
        <title>{`HalfStack | ${name} Sponsorship`}</title>
      </Head>
      <EventHeader dateString={dateString} slug={slug} />
      <Banner background={`${slug}/full.png`}>
        <BannerText>FAQs</BannerText>
        <Text fontSize="extra-large">
          {name} {year}
        </Text>
      </Banner>

      <EventFAQs faqs={faqs} />

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
