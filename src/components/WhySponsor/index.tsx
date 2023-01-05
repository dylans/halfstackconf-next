import React from "react";

import { BodyArea } from "../BodyArea";
import { Text } from "../Text";
import styles from "./index.module.css";

const reasons = [
  "Sponsors improve the attendee experience and receive credit for various facets of HalfStack.",
  "Sponsors typically seek to raise awareness for their products, services, and/or recruiting efforts, and to bring their team together for an unforgettable day with the local JavaScript community.",
  "An intimate setting with very high quality attendees, speakers, and talks.",
  "Sponsorships are customised to provide a solid return on investment.",
  "Sponsors will feature prominently prior to the event on the event website, mailing list, social media, monthly meetups, attendee packet, and more.",
  "Sponsors will feature prominently at the event on the slide deck, conference badges, t-shirts, banners, signs, and any other promotional materials.",
  "Sponsors may distribute their swag to attendees.",
  "Sponsors will feature prominently after the event on recorded videos, monthly meetups, recap blogs, and the initial event website for the next event.",
  "Sponsors will receive our thanks during the conference.",
  "HalfStack is open to creative sponsorship suggestions that retain our mission of providing the best possible experience for our attendees.",
];

export interface WhySponsorProps {
  children?: React.ReactNode;
}

export const WhySponsor = ({ children }: WhySponsorProps) => {
  return (
    <BodyArea className={styles.whySponsor}>
      <Text as="h2" className={styles.h2} fontSize="extra-large">
        Why Sponsor?
      </Text>
      <ul className={styles.reasons}>
        {reasons.map((reason) => (
          <Text
            as="li"
            className={styles.reason}
            fontSize="medium"
            key={reason}
          >
            {reason}
          </Text>
        ))}
      </ul>
      {children}
    </BodyArea>
  );
};
