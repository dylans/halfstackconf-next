import Head from "next/head";

import { Banner } from "~/components/Banner";
import { BannerText } from "~/components/BannerText";
import { EventFooter } from "~/components/EventFooter";
import { EventHeader } from "~/components/EventHeader";
import { EventTheme } from "~/components/EventTheme";
import { ExpectationPhotos } from "~/components/ExpectationPhotos";
import { TicketsOffer } from "~/components/TicketsOffer";

import { getEventDataCurrentAndDefault, getEvents } from "../../data";
import { ReturnedParams, ReturnedProps } from "../../utils";
import styles from "./tickets.module.css";

export default function Tickets({
  event: { code, dateString, name, slug },
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <EventTheme event={slug}>
      <Head>
        <title>{`HalfStack | ${name} Tickets`}</title>
      </Head>
      <EventHeader dateString={dateString} slug={slug} />
      <Banner background={`${slug}/full.png`}>
        <BannerText>Tickets</BannerText>
      </Banner>
      <TicketsOffer code={code} />
      <ExpectationPhotos className={styles.expectationPhotos} />
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
