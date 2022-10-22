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
    <header className={styles.header}>
      <div className={styles.contents}>
        <Link href="/">
          <Image alt="HalfStack" className={styles.logo} src={logo} />
        </Link>
        <nav className={styles.links}>
          {links.map(([children, href]) => (
            <TextLink href={href} key={href}>
              {children}
            </TextLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
