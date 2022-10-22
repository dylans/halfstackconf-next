import Head from "next/head";

import { EventsList } from "../components/Index/EventsList";
import { Expectation } from "../components/Index/Expectation";
import { Intro } from "../components/Index/Intro";
import { Newsletter } from "../components/Index/Newsletter";
import { SponsorStacksList } from "../components/SponsorStacksList";
import { ReturnedProps } from "../utils";

export default function Index({
  sponsors,
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>HalfStack | Open Web Conferences</title>
      </Head>
      <Intro />
      <EventsList />
      <Expectation />
      <Newsletter />
      <SponsorStacksList {...sponsors} />;
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      sponsors: (await import("../data/sponsors.json")).default,
    },
  };
}
