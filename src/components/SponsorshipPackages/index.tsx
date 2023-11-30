import Image from "next/image";

import { BodyArea } from "../BodyArea";
import { InvertedArea } from "../InvertedArea";
import { Text } from "../Text";
import styles from "./index.module.css";

const packages = [
  {
    title: "Half Stack",
    price: 2000,
    benefits: [
      "Sponsor logo and/or link on website, banner, badge, t-shirt, conference slide deck, video recording opening slide, attendee information packet, and other printed materials",
      "Sponsor may provide swag for all attendees",
      "Two free tickets, 10% off additional tickets",
      "Sponsor may provide pub quiz prizes",
      "Sponsor may run their own contest or competition",
    ],
  },
  {
    title: "Complete Stack",
    price: 5000,
    benefits: [
      "All Half Stack benefits, plus:",
      "Higher priority for logo placement",
      "Social Media Thank You",
      "Sponsor will have dedicated table for swag or demos and may place up to two of their popup banners in the venue",
      "Sponsor may provide official conference swag",
      "Sponsor may provide 60s video for rotation during breaks",
      "Four free tickets and 20% discount for additional tickets",
      "Two tickets to attend the speaker and sponsor pre-event dinner",
      "Sponsor may participate as co-MC for the pub quiz, battle decks, or other interactive rounds (first come, first served)",
    ],
  },
];

export interface SponsorshipPackagesProps {
  currency: string | undefined;
  price?: Record<string, number>;
}

export const SponsorshipPackages = ({ currency = "$" }) => {
  return (
    <InvertedArea className={styles.sponsorshipPackages}>
      <BodyArea>
        <Text as="h2" className={styles.h2} fontSize="extra-large">
          <Image alt="" height={96} src="/icons/gift.png" width={96} />
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
                {currency !== "₪"
                  ? sponsorshipPackage.price
                  : getTelAvivPrices[
                      sponsorshipPackage.title.split(" ")[0].toLowerCase()
                    ]}
                )
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

const getTelAvivPrices: Record<string, number> = {
  small: 2500,
  half: 5000,
  medium: 5000,
  large: 7500,
  complete: 15000,
};
