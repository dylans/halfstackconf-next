import Head from "next/head";

import { Banner } from "../../components/Banner";
import { BannerText } from "../../components/BannerText";
import { EventFooter } from "../../components/EventFooter";
import { EventHeader } from "../../components/EventHeader";
import { EventSchedule } from "../../components/EventSchedule";
import { EventTheme } from "../../components/EventTheme";
import { getEventDataCurrentAndDefault, getEvents } from "../../data";
import { ReturnedParams, ReturnedProps } from "../../utils";

export default function Schedule({
  event: { name, packet, schedule, slug },
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <EventTheme event={slug}>
      <Head>
        <title>{`HalfStack | ${name} Schedule`}</title>
      </Head>
      <EventHeader slug={slug} />
      <Banner background={`${slug}/full.png`}>
        <BannerText>Schedule</BannerText>
      </Banner>
      <EventSchedule packet={packet} schedule={schedule} slug={slug} />
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
