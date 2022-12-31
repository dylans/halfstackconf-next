import Head from "next/head";

import { Expectation } from "../components/Expectation";
import { EventsList } from "../components/Index/EventsList";
import { Intro } from "../components/Index/Intro";
import { Newsletter } from "../components/Index/Newsletter";
import { SponsorStacksList } from "../components/SponsorStacksList";
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
      <Intro />
      <EventsList events={events} />
      <Expectation />
      <Newsletter />
      <SponsorStacksList {...sponsors} />;
    </>
  );
}

export async function getStaticProps() {
  const eventsOrder = (await import("../data/events.json")).default;
  return {
    props: {
      events: await Promise.all(eventsOrder.map(getEventDataCurrentAndDefault)),
      sponsors: (await import("../data/sponsors.json")).default,
    },
  };
}
