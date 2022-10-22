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
            href="https://twitter.com/halfstackconf"
            className={styles.icon}
            key={alt}
            target="_blank"
            rel="noreferrer"
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
        <a href="https://wearedhd.com" target="_blank" rel="noreferrer">
          David Henderson Design
        </a>
        .
      </Text>
    </footer>
  );
}
