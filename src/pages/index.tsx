import Head from "next/head";

import { EventsList } from "../components/Index/EventsList";
import { Expectation } from "../components/Index/Expectation";
import { Intro } from "../components/Index/Intro";
import { Newsletter } from "../components/Index/Newsletter";
import { Sponsors } from "../components/Index/Sponsors";

export default function Index() {
  return (
    <>
      <Head>
        <title>HalfStack | Open Web Conferences</title>
      </Head>
      <Intro />
      <EventsList />
      <Expectation />
      <Newsletter />
      <Sponsors />
    </>
  );
}
