import Head from "next/head";

import { BodyArea } from "../../components/BodyArea";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Text } from "../../components/Text";
import styles from "./index.module.css";

export default function Error404() {
  return (
    <>
      <Head>
        <title>HalfStack | Error</title>
      </Head>
      <Header />
      <BodyArea className={styles.bodyArea}>
        <Text as="h1" fontSize="large">
          Oops, the page you are looking for does not exist.
        </Text>
        <Text as="p" fontSize="medium">
          Please use the links above to navigate the site.
        </Text>
      </BodyArea>
      <Footer />
    </>
  );
}
