import Head from "next/head";

import { BodyArea } from "../../components/BodyArea";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import styles from "./index.module.css";

const entries = [
  "Harassment includes offensive verbal comments related to gender, gender identity and expression, age, sexual orientation, disability, physical appearance, body size, race, ethnicity, religion, technology choices, sexual images in public spaces, deliberate intimidation, stalking, following, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention.",
  "Participants asked to stop any harassing behavior are expected to comply immediately.",
  "Sponsors are also subject to the anti-harassment policy. In particular, sponsors should not use sexualized images, activities, or other material. Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise create a sexualized environment.",
  "If a participant engages in harassing behavior, the conference organisers may take any action they deem appropriate, including warning the offender or expulsion from the conference with no refund.",
  "If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact a member of conference staff immediately. Conference staff will be introduced at the start of the day and will be wearing conference t-shirts.",
  "Conference staff will be happy to help participants contact venue security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the conference. We value your attendance.",
  "We expect participants to follow these rules at all conference venues and conference-related social events.",
];

export default function FAQs() {
  return (
    <>
      <Head>
        <title>HalfStack | Code of Conduct</title>
      </Head>
      <Header />
      <BodyArea>
        <Text as="h1" className={styles.h1} fontSize="extra-large">
          Code of Conduct
        </Text>
        <div className={styles.entries}>
          {entries.map((entry) => (
            <Text as="p" className={styles.entry} key={entry}>
              {entry}
            </Text>
          ))}
        </div>
      </BodyArea>
      <Footer />
    </>
  );
}
