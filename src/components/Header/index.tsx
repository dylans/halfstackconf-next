import Image from "next/future/image";
import Link from "next/link";

import logo from "../logo.svg";
import { TextLink } from "../TextLink";
import styles from "./index.module.css";

const links = [
  ["Past Events", "/events"],
  ["Sponsorships", "/sponsorships"],
  ["Blog", "/blog"],
  ["Contact", "/contact"],
  ["FAQs", "/faqs"],
];

export function Header() {
  return (
    <nav className={styles.header}>
      <Link href="/">
        <Image alt="HalfStack" className={styles.logo} src={logo} />
      </Link>
      <div className={styles.links}>
        {links.map(([children, href]) => (
          <TextLink key={href} href={href}>
            {children}
          </TextLink>
        ))}
      </div>
    </nav>
  );
}
