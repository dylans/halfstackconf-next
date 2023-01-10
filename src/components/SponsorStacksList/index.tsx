import Link from "next/link";

import { EventSponsors } from "../../data/types";
import { RoundLink } from "../RoundLink";
import { SponsorStack } from "../SponsorStack";
import { Text } from "../Text";
import styles from "./index.module.css";
import { SponsorsArea } from "./SponsorsArea";

export function SponsorStacksList({
  complete,
  large,
  medium,
  small,
}: EventSponsors) {
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
        href="/spon"
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
        <SponsorStack sponsors={complete} stack="complete" />
      )}
      {large?.length && <SponsorStack sponsors={large} stack="large" />}
      {medium?.length && <SponsorStack sponsors={medium} stack="medium" />}
      {small?.length && <SponsorStack sponsors={small} stack="small" />}

      <Text as="div" className={styles.bottomText}>
        There are loads of great reasons to sponsor a HalfStack conference this
        year. Want to find out more?
      </Text>
      <RoundLink
        as={Link}
        className={styles.takeMeBottom}
        href="/spon"
        variant="shadow"
      >
        Take me to the sponsors page
      </RoundLink>
    </SponsorsArea>
  );
}
