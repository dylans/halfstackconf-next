import Image from "next/future/image";

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
          className={styles.form}
          action="//halfstackconf.us13.list-manage.com/subscribe/post?u=847c7b2749adac7c367eadbd1&amp;id=48709f23c2"
          method="post"
          target="_blank"
          noValidate
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
              as="input"
              fontSize="medium"
              aria-required
              className={styles.input}
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
              as="input"
              fontSize="medium"
              aria-required
              className={styles.input}
              name="EMAIL"
              type="email"
            />
          </div>
          <button className={styles.submit} type="submit">
            <Image
              alt="Submit"
              sizes="3.5rem"
              className={styles.submitIcon}
              src={checkButton}
            />
          </button>
        </form>
      </div>
    </div>
  );
}
