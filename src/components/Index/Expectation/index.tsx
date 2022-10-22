import Image from "next/future/image";

import { RoundLink } from "../../RoundLink";
import { Text } from "../../Text";
import whatToExpect1 from "./assets/whatToExpect1.jpg";
import whatToExpect2 from "./assets/whatToExpect2.jpg";
import styles from "./index.module.css";

export function Expectation() {
  return (
    <div className={styles.details}>
      <div className={styles.contents}>
        <Text as="h2" className={styles.h2} fontSize="large">
          What to Expect
        </Text>
        <Text as="p" className={styles.p} fontSize="medium">
          HalfStack events are fun, creative single track JavaScript events
          hosted in relaxed environments. HalfStack provides authentic, high
          value experiences for all attendees.
        </Text>
        <Text as="p" className={styles.p} fontSize="medium">
          The priority for HalfStack is the attendee experience, with great
          food, drinks, talks, swag, and community. Hosted by London’s
          longest-lived JavaScript meetup group, HalfStack now extends beyond
          London to other cities including Vienna, Phoenix, Charlotte, Tel Aviv,
          Newquay, and New York. And online due to COVID.
        </Text>
        <Text as="p" className={styles.p} fontSize="medium">
          HalfStack carefully curates talks that inspire and inform the audience
          in a highly interactive and entertaining manner. Each HalfStack event
          provides an intimate feeling where each attendee has time to meet one
          another.
        </Text>
        <div className={styles.photos}>
          <Image
            alt="Two conference speakers with dog masks on"
            src={whatToExpect1}
          />
          <Image
            alt="Three smiling conference attendees with VR headsets on"
            src={whatToExpect2}
          />
        </div>
        <Text as="h2" className={styles.h2} fontSize="large">
          COVID-19 Policy
        </Text>
        <Text as="p" className={styles.p} fontSize="medium">
          Due to COVID-19, all in-person indoor HalfStack events originally
          scheduled from March 2020 were postponed indefinitely and we&apos;re
          in the process of cautiously reopening.
        </Text>
        <Text as="p" className={styles.p} fontSize="medium">
          COVID-19 refund policy: Full refunds are available up to 7 days prior
          to a scheduled in-person event. If you choose to keep your HalfStack
          ticket until the rescheduled date, we will provide you with free
          access to our HalfStack Online events until we can safely have
          in-person events again.
        </Text>
        <RoundLink as="a" className={styles.bottomButton} href="/pastevents">
          Take me to past events
        </RoundLink>
      </div>
    </div>
  );
}
