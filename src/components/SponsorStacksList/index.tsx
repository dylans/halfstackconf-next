import Link from "next/link";

import { EventSponsors } from "../../data/types";
import { RoundLink } from "../RoundLink";
import { SponsorStack } from "../SponsorStack";
import { Text } from "../Text";
import styles from "./index.module.css";
import { SponsorsArea } from "./SponsorsArea";

export interface SponsorStacksListProps extends EventSponsors {
  slug?: string;
}

export function SponsorStacksList({
  complete,
  large,
  medium,
  small,
  slug,
}: SponsorStacksListProps) {
  const href = slug ? `${slug}/spon` : "/spon";
  const blurb = (
    <>
      <Text as="p">
        Our conferences wouldn&apos;t be possible without the generous support
        of our sponsors.
        <br />
        <br />
        Interested in becoming one?
      </Text>
      <RoundLink
        as={Link}
        className={styles.takeMeTop}
        href={href}
        variant="shadow"
      >
        Take me to the sponsors page
      </RoundLink>
    </>
  );

  if (
    !complete?.length &&
    !large?.length &&
    !medium?.length &&
    !small?.length
  ) {
    return <SponsorsArea title="Sponsoring HalfStack">{blurb}</SponsorsArea>;
  }

  return (
    <SponsorsArea title="Our Wonderful Sponsors">
      {complete?.length && (
        <SponsorStack slug={slug} sponsors={complete} stack="complete" />
      )}
      {large?.length && (
        <SponsorStack slug={slug} sponsors={large} stack="large" />
      )}
      {medium?.length && (
        <SponsorStack slug={slug} sponsors={medium} stack="medium" />
      )}
      {small?.length && (
        <SponsorStack slug={slug} sponsors={small} stack="small" />
      )}

      <Text as="div" className={styles.bottomText}>
        There are loads of great reasons to sponsor a HalfStack conference this
        year. Want to find out more?
      </Text>
      <RoundLink
        as={Link}
        className={styles.takeMeBottom}
        href={href}
        variant="shadow"
      >
        Take me to the sponsors page
      </RoundLink>
    </SponsorsArea>
  );
}
