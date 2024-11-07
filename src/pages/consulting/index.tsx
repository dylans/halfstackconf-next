import Head from "next/head";

import { BodyArea } from "~/components/BodyArea";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Text } from "~/components/Text";
import { TextLink } from "~/components/TextLink";

import styles from "./index.module.css";

export default function Consulting() {
  return (
    <>
      <Head>
        <title>HalfStack | Consulting</title>
      </Head>
      <Header />
      <BodyArea>
        <Text as="h1" fontSize="extra-large">
          Amazing help
        </Text>
        <br />
        <Text as="p">
          The HalfStack team and community are an excellent resource for help
          with your next project, building for some of the world&pos;s most
          impressive companies and open source projects
        </Text>
        <br />
        <Text as="p">
          Whether you are building your next web app, need help solving complex
          problems, or looking to bring creative inspiration to your next idea,
          we have you covered.{" "}
          <TextLink className={styles.textLink} href="/contact">
            Contact Us for more information.
          </TextLink>
        </Text>
      </BodyArea>
      <Footer />
    </>
  );
}
