import Image from "next/image";

import { sponsorshipForm } from "../../urls";
import { BodyArea } from "../BodyArea";
import { InvertedArea } from "../InvertedArea";
import { RoundLink } from "../RoundLink";
import { Text } from "../Text";
import whatToExpect1 from "./assets/whatToExpect1.jpg";
import whatToExpect2 from "./assets/whatToExpect2.jpg";
import styles from "./index.module.css";

export interface SponsorshipExpectationsProps {
  expectations: string[];
  prospectus: string | undefined;
}

export const SponsorshipExpectations = ({
  prospectus,
  expectations,
}: SponsorshipExpectationsProps) => {
  return (
    <InvertedArea className={styles.sponsorshipExpectations}>
      <BodyArea>
        <Text as="h2" fontSize="extra-large">
          What to Expect
        </Text>
        <div className={styles.contents}>
          <div className={styles.expectations}>
            {expectations.map((expectation) => (
              <Text as="p" className={styles.p} key={expectation}>
                {expectation}
              </Text>
            ))}
          </div>
          <div className={styles.photos}>
            <div className={styles.photoArea}>
              <Image
                alt="Two conference speakers with dog masks on"
                className={styles.photo}
                fill
                sizes="100vw"
                src={whatToExpect1}
              />
            </div>
            <div className={styles.photoArea}>
              <Image
                alt="Three smiling conference attendees with VR headsets on"
                className={styles.photo}
                fill
                sizes="100vw"
                src={whatToExpect2}
              />
            </div>
          </div>
        </div>
      </BodyArea>
      {prospectus && (
        <div className={styles.links}>
          <RoundLink as="a" href={prospectus} target="_blank">
            PDF Prospectus
          </RoundLink>
          <RoundLink as="a" href={sponsorshipForm} target="_blank">
            Sponsor HalfStack Now
          </RoundLink>
        </div>
      )}
    </InvertedArea>
  );
};
