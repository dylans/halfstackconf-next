import Head from "next/head";

import { BodyArea } from "../components/BodyArea";
import { Text } from "../components/Text";
import styles from "./index.module.css";

const sections = {
  "Why 7 HalfStack Events?":
    "We wanted to bring HalfStack beyond London to other great JavaScript communities. If you're interested in bringing HalfStack to your city, let us know!",
  "Does HalfStack include paid vendor pitches?":
    "No, never. Occasionally a company that has a talk accepted also chooses to sponsor HalfStack, but we have a strict policy decoupling sponsorships from speakers.",
  "Do you sell my contact information to sponsors or send annoying emails?": (
    <>
      Never. We will send you a few emails with information about the event, and
      one email after the event with follow-up information. Beyond that, if you
      want to hear from us again, you may opt-in to our{" "}
      <a href="https://halfstackconf.com/newsletter/">
        monthly HalfStack newsletter
      </a>
      .
    </>
  ),
  "What is your position on COVID-19?": (
    <>
      Due to COVID-19, all in-person indoor HalfStack events originally
      scheduled from March 2020 were postponed indefinitely and we&apos;re in
      the process of cautiously reopening.
      <br />
      <br />
      COVID-19 refund policy: Full refunds are available up to 7 days prior to a
      scheduled in-person event. If you choose to keep your HalfStack ticket
      until the rescheduled date, we will provide you with free access to our
      HalfStack Online events until we can safely have in-person events again.
    </>
  ),
};

export default function FAQs() {
  return (
    <BodyArea>
      <Head>
        <title>HalfStack | FAQs</title>
      </Head>
      <Text as="h1" fontSize="large">
        Frequently Asked Questions
      </Text>
      <div className={styles.entries}>
        {Object.entries(sections).map(([question, answer]) => (
          <div key={question}>
            <Text as="h2" fontSize="medium">
              {question}
            </Text>
            <Text as="p">{answer}</Text>
          </div>
        ))}
      </div>
    </BodyArea>
  );
}
