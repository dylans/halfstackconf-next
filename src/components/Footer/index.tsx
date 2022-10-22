import Image from "next/future/image";

import { Text } from "../Text";
import { TextLink } from "../TextLink";
import facebookIcon from "./facebook-icon.png";
import styles from "./index.module.css";
import instagramIcon from "./instagram-icon.png";
import twitterIcon from "./twitter-icon.png";

const icons = [
  ["Facebook logo", facebookIcon],
  ["Instagram logo", instagramIcon],
  ["Twitter logo", twitterIcon],
] as const;

export function Footer() {
  return (
    <footer>
      <div className={styles.iconLinks}>
        {icons.map(([alt, src]) => (
          <a
            className={styles.icon}
            href="https://twitter.com/halfstackconf"
            key={alt}
            rel="noreferrer"
            target="_blank"
          >
            <Image alt={alt} className={styles.icon} src={src} />
          </a>
        ))}
      </div>
      <div className={styles.textLinks}>
        <TextLink href="/code-of-conduct">Code of Conduct</TextLink>
        <TextLink href="/faqs">FAQs</TextLink>
        <TextLink href="/contact">Contact Us</TextLink>
      </div>
      <Text as="div" className={styles.bottom} fontSize="extra-small">
        Copyright © Open Web Conferences, LLC, {new Date().getFullYear()}. All
        rights reserved. Site design by{" "}
        <a href="https://wearedhd.com" rel="noreferrer" target="_blank">
          David Henderson Design
        </a>
        .
      </Text>
    </footer>
  );
}
