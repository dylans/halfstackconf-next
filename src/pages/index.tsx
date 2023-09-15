import Head from "next/head";

import { ExpectationPhotos } from "~/components/ExpectationPhotos";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { EventsList } from "~/components/Index/EventsList";
import { Intro } from "~/components/Index/Intro";
import { Newsletter } from "~/components/Index/Newsletter";
import { SponsorStacksList } from "~/components/SponsorStacksList";
import { eventOrder } from "~/data/events";

import { getEventDataCurrentAndDefault } from "../data";
import { ReturnedProps } from "../utils";

export default function Index({
  events,
  sponsors,
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>HalfStack | Open Web Conferences</title>
      </Head>
      <Header />
      <main>
        <Intro />
        <EventsList events={events} />
        <ExpectationPhotos />
        <Newsletter />
        <SponsorStacksList {...sponsors} />;
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      events: await Promise.all(eventOrder.map(getEventDataCurrentAndDefault)),
      sponsors: (await import("~/data/sponsors.json")).default,
    },
  };
}
