import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { CopyrightFooter } from "../CopyrightFooter";
import { TextLink } from "../TextLink";
import cityscapeBelgrade from "./assets/cityscapeBelgrade.png";
import cityscapeCharlotte from "./assets/cityscapeCharlotte.png";
import cityscapeLondon from "./assets/cityscapeLondon.png";
import cityscapeNewquay from "./assets/cityscapeNewquay.png";
import cityscapeNewYork from "./assets/cityscapeNewYork.png";
import cityscapePhoenix from "./assets/cityscapePhoenix.png";
import cityscapeTelAviv from "./assets/cityscapeTelAviv.png";
import cityscapeVienna from "./assets/cityscapeVienna.png";
import facebookIcon from "./assets/iconFacebook.png";
import instagramIcon from "./assets/iconInstagram.png";
import twitterIcon from "./assets/iconTwitter.png";
// import youtubeIcon from "./assets/iconYouTube.png";
import styles from "./index.module.css";

const cityscapes = [
  ["Belgrade", styles.belgrade, "/belgrade", cityscapeBelgrade],
  ["Charlotte", styles.charlotte, "/charlotte", cityscapeCharlotte],
  ["London", styles.london, "/london", cityscapeLondon],
  ["New York", styles.newYork, "/newYork", cityscapeNewYork],
  ["Newquay", styles.newquay, "/newquay", cityscapeNewquay],
  ["Phoenix", styles.phoenix, "/phoenix", cityscapePhoenix],
  ["Tel Aviv", styles.telAviv, "/telAviv", cityscapeTelAviv],
  ["Vienna", styles.vienna, "/vienna", cityscapeVienna],
] as const;

const icons = [
  ["Facebook", facebookIcon, "https://www.facebook.com/halfstackconf/"],
  ["Instagram", instagramIcon, "https://www.instagram.com/halfstack2023/"],
  ["Twitter", twitterIcon, "https://twitter.com/halfstackconf/"],
] as const;

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.cityscapes}>
        {cityscapes.map(([alt, className, href, src]) => (
          <Link
            className={clsx(styles.cityscapeLink, className)}
            href={href}
            key={alt}
          >
            <Image
              alt={`${alt} cityscape`}
              className={styles.cityscapeImage}
              sizes="10vw"
              src={src}
            />
          </Link>
        ))}
      </div>
      <div className={styles.iconLinks}>
        {icons.map(([alt, src, href]) => (
          <a
            className={styles.icon}
            href={href}
            key={alt}
            rel="noreferrer"
            target="_blank"
          >
            <Image alt={`${alt} logo`} className={styles.icon} src={src} />
          </a>
        ))}
      </div>
      <div className={styles.textLinks}>
        <TextLink className={styles.textLink} href="/code-of-conduct">
          Code of Conduct
        </TextLink>
        <TextLink className={styles.textLink} href="/faqs">
          FAQs
        </TextLink>
        <TextLink className={styles.textLink} href="/contact">
          Contact Us
        </TextLink>
      </div>
      <CopyrightFooter />
    </footer>
  );
}
