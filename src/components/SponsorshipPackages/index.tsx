import Image from "next/image";

import { BodyArea } from "../BodyArea";
import { InvertedArea } from "../InvertedArea";
import { Text } from "../Text";
import styles from "./index.module.css";

const packages = [
  {
    title: "Small Stack",
    price: 1000,
    benefits: [
      "Sponsor logo and/or link on website, banner, badge, t-shirt, conference slide deck, meetup slide deck, video recording opening slide, attendee information packet, and other printed materials",
      "Recognition via social media",
      "Sponsor may provide swag for all attendees",
      "One free ticket",
    ],
  },
  {
    title: "Medium Stack",
    price: 2000,
    benefits: [
      "Sponsor logo and/or link on website, banner, badge, t-shirt, conference slide deck, meetup slide deck, video recording opening slide, attendee information packet, and other printed materials",
      "Sponsor may provide swag for all attendees",
      "Sponsor may offer a competition to all attendees",
      "Two free tickets",
    ],
  },
  {
    title: "Large Stack",
    price: 3000,
    benefits: [
      "Sponsor logo on website, banner, badge, t-shirt, conference slide deck, meetup slide deck, video recording opening slide, attendee information packet, and other printed materials",
      "Sponsor may provide swag and prizes for JS Pub Quiz",
      "Sponsor may offer a competition to all attendees",
      "Sponsor may provide official conference swag",
      "Sponsor may provide 30s video for rotation during breaks",
      "Three free tickets and discount for additional tickets",
      "One ticket to attend the speaker and sponsor pre-event dinner",
    ],
  },
  {
    title: "Complete Stack",
    price: 4000,
    benefits: [
      "Sponsor logo on website, banner, badge, t-shirt, conference slide deck, meetup slide deck, video recording opening slide, attendee information packet, and other printed materials",
      "Sponsor may provide swag and prizes for JS Pub Quiz",
      "Sponsor may offer a competition to all attendees",
      "Sponsor may provide official conference swag",
      "Sponsor may provide 60s video for rotation during breaks",
      "Four free tickets and discount for additional tickets",
      "Two tickets to attend the speaker and sponsor pre-event dinner",
    ],
  },
];

export interface SponsorshipPackagesProps {
  currency: string | undefined;
}

export const SponsorshipPackages = ({
  currency = "$",
}: SponsorshipPackagesProps) => {
  return (
    <InvertedArea className={styles.sponsorshipPackages}>
      <BodyArea>
        <Text as="h2" className={styles.h2} fontSize="extra-large">
          <Image
            alt=""
            height={96}
            src="/icons/gift.png"
            style={{
              maxWidth: "100%",
              height: "auto",
            }}
            width={96}
          />
          Packages
        </Text>
        <div className={styles.contents}>
          {packages.map((sponsorshipPackage) => (
            <ul
              className={styles.sponsorshipPackage}
              key={sponsorshipPackage.title}
            >
              <Text as="h3" fontSize="large">
                {sponsorshipPackage.title} ({currency}
                {sponsorshipPackage.price})
              </Text>
              <ul>
                {sponsorshipPackage.benefits.map((benefit) => (
                  <Text as="li" className={styles.benefit} key={benefit}>
                    {benefit}
                  </Text>
                ))}
              </ul>
            </ul>
          ))}
        </div>
      </BodyArea>
    </InvertedArea>
  );
};
