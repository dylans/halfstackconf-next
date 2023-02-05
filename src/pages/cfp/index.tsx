import Head from "next/head";

import { Anchor } from "~/components/Anchor";
import { Banner } from "~/components/Banner";
import { BannerText } from "~/components/BannerText";
import { BodyArea } from "~/components/BodyArea";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Text } from "~/components/Text";

import styles from "./index.module.css";

export default function CFP() {
  return (
    <>
      <Head>
        <title>HalfStack | CFP</title>
      </Head>
      <Header />
      <Banner>
        <BannerText>CFP</BannerText>
      </Banner>
      <BodyArea>
        <Text as="h2" className={styles.h2} fontSize="large">
          HalfStack CFP Process
        </Text>

        <Text as="p" className={styles.p}>
          The new HalfStack CfP process is a significant change from traditional
          CfP after having time to reflect on what we like and dislike about
          CfPs during COVID.
        </Text>

        <Text as="p" className={styles.p}>
          Note that being a speaker/performer at HalfStack is not just about
          showing up for your session and then departing. The value to you and
          the audience is being part of the full event, being available to
          participate in the speaker dinner, all of the sessions, and the
          afterparty. We understand that things might come up unexpectedly, but
          you should not propose a session if you do not expect to be present
          for the entire event.
        </Text>

        <Text as="p" className={styles.p}>
          The new approach is open-ended, with no formal deadlines or
          guidelines. You simply create a Living Spec document, add the details
          you feel are relevant (please limit to two session ideas), share your
          CfP document with hello at halfstackconf dot com (in email address
          form, share as admin), and we&apos;ll review and give you feedback. If
          we have space and feel the session is relevant, we&apos;ll invite you
          to speak. All preliminary communication will happen within the Living
          Spec document.
        </Text>

        <Text as="p" className={styles.p}>
          In general, excellent HalfStack sessions are creative, humo(u)rous and
          inspiring, focus more on what we can create with the web platform than
          the specific framework. They&apos;re generally not full scale
          tutorials, but more &quot;here&apos;s how I created something,
          here&apos;s the fun demo&quot;.
        </Text>

        <Text as="p" className={styles.p}>
          To get started with the CfP,{" "}
          <Anchor href="https://www.livingspec.com/createaccount">
            create your Living Spec account
          </Anchor>
          , put together your idea, and then share it with us.
        </Text>

        <Text as="p" className={styles.p}>
          For years HalfStack has showcased many of our side projects. Living
          Spec started as HalfStack founder Dylan Schiemann&apos;s side project
          before becoming his full time hustle!
        </Text>

        <Text as="p" className={styles.p}>
          Living Spec is typically used for your team to create your next
          product spec! Amazing conference sessions are their own mini-products,
          so now you have the freedom to create your own session spec, rather
          than being confined to whatever form fields we think are interesting.
          Living Spec is in beta so please be patient if you run into any
          issues.
        </Text>

        <Text as="p" className={styles.p}>
          Also please be patient in general. We&apos;re a small team. Sometimes
          we respond almost instantly, sometimes it takes us a couple of weeks
          as we&apos;re busy preparing for the next event.
        </Text>
      </BodyArea>
      <Footer />
    </>
  );
}
