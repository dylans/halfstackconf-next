import Head from "next/head";
import React from "react";

import { BodyArea } from "~/components/BodyArea";
import { FAQsList } from "~/components/FAQs";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Text } from "~/components/Text";

const faqs: [string, React.ReactNode][] = [
  [
    "Is HalfStack really giving away an Apple Vision Pro?",
    <>
      <br />
      <p>Ideally, yes, but it depends on you.</p>
      <br />
      <p>
        Throughout the history of the web platform, there have been a few
        significant milestones that have changed what is possible on the
        platform:
      </p>
      <ul>
        <li>creation of the internet</li>
        <li>Personal computers</li>
        <li>HTML</li>
        <li>Mosaic and the image tag</li>
        <li>JavaScript</li>
        <li>CSS</li>
        <li>DOM</li>
        <li>SVG and Canvas</li>
        <li>a11y</li>
        <li>iPhone</li>
        <li>ES6</li>
        <li>AI</li>
      </ul>
      <p>
        Today, I’m adding the Vision Pro to this list. Much like the iPhone
        release in 2007, how we think about building web apps and sites will
        change significantly over the next few years. The iPhone was not the
        first smartphone, and the Vision Pro was not the first attempt at
        VR/AR/XR. However, Apple can solve many problems and change the path
        forward significantly. Combined with the recent advances in AI, we will
        soon be able to build experiences that were inconceivable just a few
        years ago.
      </p>
      <br />
      <h3>Ok, great, but what does this have to do with HalfStack?</h3>
      <br />
      <p>
        Since 2015, HalfStack has been a creative celebration of the web
        platform’s possibilities. While we’ve had several talks over the years
        about early XR work, we will soon all be developing for XR, much like we
        all build for mobile and touch devices today.
      </p>
      <br />
      <p>
        Unfortunately, in 2020, COVID happened, and we haven’t recovered as a
        community. And now that we’re safe to get together, the vast wave of
        layoffs has left us without the comfort and stability we had enjoyed for
        many years.
      </p>
      <br />
      <p>
        The result: we’ve been organizing amazing events with awesome sessions
        and fun festivities, but attendance still lags behind our pre-COVID
        peak.
      </p>
      <br />
      <p>
        Making great events is a significant amount of work, but you are the
        most important element of a great event. We really want you to show up,
        be present, and enjoy your day with us.
      </p>
      <br />
      <p>
        We’ve made many adjustments to adapt conferences to our post-COVID
        needs:
      </p>
      <ul>
        <li>
          A secondary area to watch the event live, but where you can easily
          talk or have quiet time or take a zoom call if needed
        </li>
        <li>
          A shorter schedule of sessions, leaving more time to connect and
          participate
        </li>
        <li>
          Additional fun activities that reflect the interests of each community
          we serve
        </li>
        <li>Offering additional free and discounted tickets to help</li>
        <li>The option for a monthly ticket subscription ($15/month)</li>
      </ul>
      <h3>What does this have to do with the Apple Vision Pro?</h3>
      <br />
      <p>
        Starting with our HalfStack Phoenix event on February 2nd, if we have a
        nearly full house (175 or more attendees), we’re purchasing one lucky
        attendee an Apple Vision Pro (or something else if they don’t want one).
        Your chances of winning increase by participating in the event. You
        receive a raffle ticket for attending, but more tickets are available
        from our speakers and games (BattleDecks, JS Pub Quiz). And you need to
        be present to win.
      </p>
      <br />
      <p>
        Note that we will purchase your Apple Vision Pro for you. Because it
        needs to be ordered by the person wearing it (due to the measurements
        Apple makes to fit your head), it’s not practical to order one and have
        it sitting in a box on the day of the event. We will cover the cost of
        the base model, AppleCare, tax, and the prescription lens.
      </p>
      <br />
      <p>
        Beyond Phoenix, we plan to do the same for our other events in 2024.
        It’s not clear yet when the Vision Pro will be released in various
        countries, but we’ll figure it out with you. And we’ll give you an extra
        raffle ticket if you book your ticket for any 2024 event prior to
        February 2nd.
      </p>
      <br />
      <p>So, we hope you’ll do the following:</p>
      <ul>
        <li>
          Get your HalfStack ticket early, either as a one-time purchase or a
          monthly subscription
        </li>
        <li>Encourage your friends and colleagues to attend as well</li>
        <li>Participate at HalfStack</li>
      </ul>
    </>,
  ],
  [
    "Why 8 HalfStack Events?",
    "We wanted to bring HalfStack beyond London to other great JavaScript communities. If you are interested in bringing HalfStack to your city, let us know!",
  ],
  [
    "Does HalfStack include paid vendor pitches?",
    "No, never. Occasionally a company that has a talk accepted also chooses to sponsor HalfStack, but we have a strict policy decoupling sponsorships from speakers.",
  ],
  [
    "Do you sell my contact information to sponsors or send annoying emails?",
    <>
      Never. We will send you a few emails with information about the event, and
      one email after the event with follow-up information. Beyond that, if you
      want to hear from us again, you may opt-in to our{" "}
      <a href="https://halfstackconf.com/newsletter/">
        monthly HalfStack newsletter
      </a>
      .
    </>,
  ],
  [
    "What is your position on COVID-19?",
    <>
      Due to COVID-19, all in-person indoor HalfStack events originally
      scheduled from March 2020 were postponed indefinitely and we&apos;re in
      the process of cautiously reopening.
      <br />
      <br />
      COVID-19 refund policy: Full refunds ( less any non-refundable credit card
      processing fees ) are available up to 7 days prior to a scheduled
      in-person event. If you wake up ill, stay home and we&apos;ll credit you
      with a ticket for a future event.
    </>,
  ],
];

export default function FAQs() {
  return (
    <>
      <Head>
        <title>HalfStack | FAQs</title>
      </Head>
      <Header />
      <BodyArea>
        <Text as="h1" fontSize="extra-large">
          Frequently Asked Questions
        </Text>
        <FAQsList faqs={faqs} />
      </BodyArea>
      <Footer />
    </>
  );
}
