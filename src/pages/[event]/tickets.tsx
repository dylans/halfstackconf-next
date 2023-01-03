import Head from "next/head";

import { Banner } from "../../components/Banner";
import { BannerText } from "../../components/BannerText";
import { EventFooter } from "../../components/EventFooter";
import { EventTheme } from "../../components/EventTheme";
import { ExpectationPhotos } from "../../components/ExpectationPhotos";
import { Header } from "../../components/Header";
import { TicketsOffer } from "../../components/TicketsOffer";
import { getEventDataCurrentAndDefault, getEvents } from "../../data";
import { ReturnedParams, ReturnedProps } from "../../utils";
import styles from "./tickets.module.css";

export default function Tickets({
  event: { name, slug, year },
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <EventTheme event={slug}>
      <Head>
        <title>{`HalfStack | ${name}`}</title>
      </Head>
      <Header variant="inverted" />
      <Banner background={`${slug}/full.png`}>
        <BannerText>Tickets</BannerText>
      </Banner>
      <TicketsOffer slug={slug} year={year} />
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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: (await getEvents()).map((event) => ({
      params: { event },
    })),
  };
}
