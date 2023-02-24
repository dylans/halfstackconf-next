import clsx from "clsx";
import Image from "next/image";
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
  links?: [string, string][];
  variant?: HeaderVariant;
}

const defaultLinks: [string, string][] = [
  ["Past Events", "/pastevents"],
  ["Sponsorships", "/spon"],
  ["Contact", "/contact"],
  ["FAQs", "/faqs"],
];

export function Header({
  links = defaultLinks,
  variant = "default",
}: HeaderProps) {
  const router = useRouter();
  const { className, logo } = variants[variant];

  return (
    <header className={clsx(styles.header, className)}>
      <div className={styles.contents}>
        <Link href="/">
          <Image
            alt="HalfStack"
            className={styles.logo}
            src={logo}
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
          />
        </Link>
        <nav className={styles.links}>
          {links.map(([children, href]) => (
            <TextLink
              className={styles.textLink}
              hovering={href === router.asPath}
              href={href}
              key={href}
            >
              {children}
            </TextLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
