import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import { SponsorData } from "~/data/types";

import { RoundLink } from "../RoundLink";
import { Text } from "../Text";
import styles from "./index.module.css";

export interface SponsorStackProps {
  slug?: string;
  sponsors: SponsorData[];
  stack: SponsorStackSize;
}

export type SponsorStackSize = keyof typeof stylings;

const stylings = {
  complete: {
    areaClassName: styles.sponsorsComplete,
    buttonSize: "medium",
    label: "Complete",
  },
  half: {
    areaClassName: styles.sponsorsHalf,
    buttonSize: "medium",
    label: "Half",
  },
  large: {
    areaClassName: styles.sponsorsLarge,
    buttonSize: "medium",
    label: "Large",
  },
  medium: {
    areaClassName: styles.sponsorsMedium,
    buttonSize: "small",
    label: "Medium",
  },
  small: {
    areaClassName: styles.sponsorsSmall,
    buttonSize: "small",
    label: "Small",
  },
  community: {
    areaClassName: styles.sponsorsCommunity,
    buttonSize: "small",
    label: "Community",
  },
} as const;

export function SponsorStack({ slug, sponsors, stack }: SponsorStackProps) {
  const { areaClassName, buttonSize, label } = stylings[stack];

  return (
    <div className={styles.sponsorsList}>
      <Text as="h3" className={styles.h3} fontSize="extra-large" key={stack}>
        {label} Stack Sponsors
      </Text>
      <div className={clsx(styles.sponsors, areaClassName)}>
        {sponsors.map(({ name, href, src }) => (
          <Link
            className={styles.sponsor}
            href={href}
            key={name}
            target="_blank"
          >
            <Image
              alt={name}
              className={styles.logo}
              fill
              sizes="100%"
              src={src}
            />
          </Link>
        ))}
        <Link
          className={clsx(styles.sponsor, styles.promo)}
          href={slug ? `${slug}/spon` : "/spon"}
          target="_blank"
        >
          <Text>Want to sponsor?</Text>
          <RoundLink size={buttonSize}>Why not</RoundLink>
        </Link>
      </div>
    </div>
  );
}
