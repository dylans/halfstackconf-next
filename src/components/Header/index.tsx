import clsx from "clsx";
import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";

import { TextLink } from "../TextLink";
import logo from "./assets/logo.svg";
import logoInverted from "./assets/logoInverted.svg";
import styles from "./index.module.css";

const variants = {
  default: {
    className: styles.headerDefault,
    logo: logo as string,
  },
  inverted: {
    className: styles.headerInverted,
    logo: logoInverted as string,
  },
};

export type HeaderVariant = keyof typeof variants;

export interface HeaderProps {
  variant?: HeaderVariant;
}

export function Header({ variant = "default" }: HeaderProps) {
  const router = useRouter();
  const event = router.query.event as string;
  const { className, logo } = variants[variant];
  const links = [
    ["Past Events", "/pastevents"],
    ["Sponsorships", event ? `/${event}/spon` : "/spon"],
    ["Contact", "/contact"],
    ["FAQs", "/faqs"],
  ];

  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.contents}>
        <Link href="/">
          <Image alt="HalfStack" className={styles.logo} src={logo} />
        </Link>
        <nav className={styles.links}>
          {links.map(([children, href]) => (
            <TextLink className={styles.textLink} href={href} key={href}>
              {children}
            </TextLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
