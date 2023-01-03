import Head from "next/head";

import { Banner } from "../../components/Banner";
import { BannerText } from "../../components/BannerText";
import { BodyArea } from "../../components/BodyArea";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { RoundLink } from "../../components/RoundLink";
import { Text } from "../../components/Text";
import styles from "./index.module.css";

const reasons = [
  "Sponsors improve the attendee experience and receive credit for various facets of HalfStack.",
  "Sponsors typically seek to raise awareness for their products, services, and/or recruiting efforts, and to bring their team together for an unforgettable day with the local JavaScript community.",
  "An intimate setting with very high quality attendees, speakers, and talks.",
  "Sponsorships are customised to provide a solid return on investment.",
  "Sponsors will feature prominently prior to the event on the event website, mailing list, social media, monthly meetups, attendee packet, and more.",
  "Sponsors will feature prominently at the event on the slide deck, conference badges, t-shirts, banners, signs, and any other promotional materials.",
  "Sponsors may distribute their swag to attendees.",
  "Sponsors will feature prominently after the event on recorded videos, monthly meetups, recap blogs, and the initial event website for the next event.",
  "Sponsors will receive our thanks during the conference.",
  "HalfStack is open to creative sponsorship suggestions that retain our mission of providing the best possible experience for our attendees.",
];

const callToAction = (
  <RoundLink
    as="a"
    className={styles.callToAction}
    href="https://docs.google.com/forms/d/e/1FAIpQLSeKnyG1yon8UfBRVDQ3JT-MHK_4D8QRKEgPLcNELajC4sn3Pw/viewform"
    size="large"
    target="_blank"
    variant="shadow"
  >
    Sponsor HalfStack Now
  </RoundLink>
);

export default function Sponsorship() {
  return (
    <>
      <Head>
        <title>HalfStack | Sponsorship</title>
      </Head>
      <Header />
      <Banner>
        <BannerText>
          Sponsorship
          {callToAction}
        </BannerText>
      </Banner>
      <BodyArea className={styles.sponsorship}>
        <Text as="h2" className={styles.h2} fontSize="extra-large">
          Why Sponsor?
        </Text>
        <ul className={styles.reasons}>
          {reasons.map((reason) => (
            <Text
              as="li"
              className={styles.reason}
              fontSize="medium"
              key={reason}
            >
              {reason}
            </Text>
          ))}
        </ul>
        {callToAction}
      </BodyArea>
      <Footer />
    </>
  );
}
