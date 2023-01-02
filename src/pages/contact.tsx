import Head from "next/head";

import { BodyArea } from "../components/BodyArea";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Text } from "../components/Text";

export default function Contact() {
  return (
    <>
      <Head>
        <title>HalfStack | Contact Us</title>
      </Head>
      <Header />
      <BodyArea>
        <Text as="h1" fontSize="extra-large">
          Contact Us
        </Text>
        <iframe
          allowFullScreen
          frameBorder="0"
          height="800"
          scrolling="yes"
          seamless
          src="https://docs.google.com/forms/d/e/1FAIpQLScynDZR8IKOtraVLIH43Lp486X00mOqpPAgymd9oSlP0IHPFA/viewform"
          title="Contact Us form"
          width="100%"
        ></iframe>
      </BodyArea>
      <Footer />
    </>
  );
}
