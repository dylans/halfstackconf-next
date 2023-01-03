import Image from "next/future/image";

import { Text } from "../Text";
import whatToExpect1 from "./assets/whatToExpect1.jpg";
import whatToExpect2 from "./assets/whatToExpect2.jpg";
import styles from "./index.module.css";

export function Expectation() {
  return (
    <div className={styles.expectation}>
      <div className={styles.contents}>
        <Text as="h2" className={styles.h2} fontSize="extra-large">
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
          Newquay, and New York.
        </Text>
        <Text as="p" className={styles.p} fontSize="medium">
          HalfStack carefully curates talks that inspire and inform the audience
          in a highly interactive and entertaining manner. Each HalfStack event
          provides an intimate feeling where each attendee has time to meet one
          another.
        </Text>
        <div className={styles.photos}>
          <div className={styles.photoArea}>
            <Image
              alt="Two conference speakers with dog masks on"
              className={styles.photo}
              fill
              src={whatToExpect1}
            />
          </div>
          <div className={styles.photoArea}>
            <Image
              alt="Three smiling conference attendees with VR headsets on"
              className={styles.photo}
              fill
              src={whatToExpect2}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
