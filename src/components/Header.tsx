import Image from "next/future/image";
import Link from "next/link";

import styles from "./Header.module.css";
import logo from "./logo.svg";

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
          <Link className={styles.link} key={href} href={href}>
            {children}
          </Link>
        ))}
      </div>
    </nav>
  );
}
