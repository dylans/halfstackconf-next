import Head from "next/head";

import { ExpectationPhotos } from "~/components/ExpectationPhotos";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { EventsList } from "~/components/Index/EventsList";
import { Intro } from "~/components/Index/Intro";
import { Newsletter } from "~/components/Index/Newsletter";
import { RecapVideo } from "~/components/RecapVideo";
import { SponsorStacksList } from "~/components/SponsorStacksList";
import { TextLink } from "~/components/TextLink";
import { eventOrder } from "~/data/events";

import { getEventDataCurrentAndDefault } from "../data";
import { ReturnedProps } from "../utils";

const CURRENT_YEAR = new Date().getFullYear();

export default function Index({
  events,
  sponsors,
}: ReturnedProps<typeof getStaticProps>) {
  const upcomingEvents = events.filter(
    (event) => event.year >= CURRENT_YEAR && event.date !== "TBD"
  );

  return (
    <>
      <Head>
        <title>HalfStack | Open Web Conferences</title>
      </Head>
      <Header />
      <main>
        <Intro />
        <EventsList events={upcomingEvents} />
        {upcomingEvents.length === 0 && (
          <div
            style={{
              textAlign: "center",
              padding: "2rem",
              color: "var(--color-primary)",
            }}
          >
            <p>
              We&apos;re finalizing our upcoming events. Please check back soon!
            </p>
            <p>
              <TextLink href="/pastevents">View past events</TextLink>
            </p>
          </div>
        )}
        <RecapVideo
          eventName="HalfStack Vienna"
          trailerUrl="https://www.youtube.com/embed/RfXtq8EUSms"
        />
        <ExpectationPhotos />
        <Newsletter />
        <SponsorStacksList {...sponsors} />
      </main>
      <Footer />
    </>
  );
}

export async function getStaticProps() {
  const allEvents = await Promise.all(
    eventOrder.map(getEventDataCurrentAndDefault)
  );

  return {
    props: {
      events: allEvents,
      sponsors: (await import("~/data/sponsors.json")).default,
    },
  };
}
