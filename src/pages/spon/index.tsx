import Head from "next/head";

import { Banner } from "~/components/Banner";
import { BannerText } from "~/components/BannerText";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { RoundLink } from "~/components/RoundLink";
import { WhySponsor } from "~/components/WhySponsor";

import styles from "./index.module.css";

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
      <WhySponsor>{callToAction}</WhySponsor>
      <Footer />
    </>
  );
}
