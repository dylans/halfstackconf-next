import { BodyArea } from "../BodyArea";
import { RoundLink } from "../RoundLink";
import { Text } from "../Text";
import styles from "./index.module.css";

const paragraphs = [
  "Sponsorship does not include things that do not improve the attendee experience, including email lists of attendees, speaking slots, booths/stands, etc.",
  "All swag must be pre-approved by HalfStack.",
  "We proudly host HalfStack events in Belgrade, Charlotte, London, New York, Newquay, Phoenix, Tel Aviv, and Vienna. To sponsor multiple events, please contact us for more information.",
];

export interface SponsorshipDisclaimerProps {
  prospectus: string | undefined;
}

export const SponsorshipDisclaimer = ({
  prospectus,
}: SponsorshipDisclaimerProps) => {
  return (
    <div className={styles.sponsorshipDisclaimer}>
      <BodyArea className={styles.bodyArea}>
        {paragraphs.map((paragraph) => (
          <Text as="p" key={paragraph}>
            {paragraph}
          </Text>
        ))}
        {prospectus && (
          <RoundLink as="a" href={prospectus} target="_blank" variant="shadow">
            PDF Prospectus
          </RoundLink>
        )}
      </BodyArea>
    </div>
  );
};
