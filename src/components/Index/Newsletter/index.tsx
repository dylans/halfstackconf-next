import Image from "next/image";

import { Text } from "../../Text";
import checkButton from "./assets/checkButton.png";
import styles from "./index.module.css";

export function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className={styles.contents}>
        <Text as="h2" className={styles.h2} fontSize="large">
          Newsletter
        </Text>
        <Text as="p" className={styles.p}>
          Subscribe to receive updates about once a month from HalfStack.
        </Text>
        <form
          action="//halfstackconf.us13.list-manage.com/subscribe/post?u=847c7b2749adac7c367eadbd1&amp;id=48709f23c2"
          className={styles.form}
          method="post"
          noValidate
          target="_blank"
        >
          <div className={styles.nameArea}>
            <Text
              as="label"
              className={styles.label}
              fontSize="small"
              htmlFor="FNAME"
            >
              Name
            </Text>
            <Text
              aria-required
              as="input"
              className={styles.input}
              fontSize="medium"
              id="FNAME"
              name="FNAME"
              type="text"
            />
          </div>
          <div className={styles.emailArea}>
            <Text
              as="label"
              className={styles.label}
              fontSize="small"
              htmlFor="EMAIL"
            >
              Email
            </Text>
            <Text
              aria-required
              as="input"
              className={styles.input}
              fontSize="medium"
              id="EMAIL"
              name="EMAIL"
              type="email"
            />
          </div>
          <button className={styles.submit} type="submit">
            <Image
              alt="Submit"
              className={styles.submitIcon}
              sizes="3.5rem"
              src={checkButton}
            />
          </button>
        </form>
      </div>
    </div>
  );
}
