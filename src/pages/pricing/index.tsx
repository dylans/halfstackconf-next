import Head from "next/head";

import { Banner } from "~/components/Banner";
import { BannerText } from "~/components/BannerText";
import { BodyArea } from "~/components/BodyArea";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { Text } from "~/components/Text";

import styles from "./index.module.css";

export default function Pricing() {
  return (
    <>
      <Head>
        <title>HalfStack | Pricing</title>
      </Head>
      <Header />
      <Banner>
        <BannerText>Pricing</BannerText>
      </Banner>
      <BodyArea>
        <Text as="h2" className={styles.h2} fontSize="large">
          HalfStack Pricing
        </Text>
        <Text as="p" className={styles.p}>
          The goal of HalfStack is to do slightly better than breakeven for each
          event. Our pricing model reflects these goals.
        </Text>
        <Text as="p" className={styles.p}>
          HalfStack offers free and paid tickets for each event, and now offers
          various subscription options.
        </Text>
        <Text as="h2" className={styles.h2} fontSize="large">
          Tickets
        </Text>
        <Text as="p" className={styles.p}>
          Single ticket pricing (paid)
        </Text>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <td>&nbsp;</td>
              <td>Early early bird</td>
              <td>Early bird</td>
              <td>Standard</td>
              <td>Late bird</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>When</td>
              <td>1st month</td>
              <td>2nd & 3rd months</td>
              <td>4th-8th months</td>
              <td>Last chance</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>1st 20</td>
              <td>1st 40</td>
              <td>All</td>
              <td>All</td>
            </tr>
            <tr>
              <td>Price range (USD/GBP/EUR)</td>
              <td>100-125 </td>
              <td>175-200</td>
              <td>225-250</td>
              <td>275-325</td>
            </tr>
            <tr>
              <td>Team (6 for 5)</td>
              <td>No</td>
              <td>Yes</td>
              <td>Yes</td>
              <td>Yes</td>
            </tr>
            <tr>
              <td>Discounts</td>
              <td>No</td>
              <td>Living Spec users</td>
              <td>
                Living Spec users;
                <br /> occasionally offer discounts of 10 or 20%
              </td>
              <td>
                Living Spec users;
                <br />
                occasionally offer discounts of 10 or 20%
              </td>
            </tr>
          </tbody>
        </table>
        <Text as="p" className={styles.p}>
          Single ticket pricing (free or very low cost)
        </Text>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr>
              <td></td>
              <td>Speakers</td>
              <td>Volunteer</td>
              <td>Diversity or Hardship</td>
              <td>Student</td>
              <td>Meetup Organizers</td>
              <td>Sponsors</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>When</td>
              <td>Any</td>
              <td>Varies</td>
              <td>Varies</td>
              <td>Varies</td>
              <td>Varies</td>
              <td>1-4 included with package</td>
            </tr>
            <tr>
              <td>Quantity</td>
              <td>Any</td>
              <td>Up to 10</td>
              <td>Varies</td>
              <td>Varies</td>
              <td>Varies</td>
              <td>N/A</td>
            </tr>
            <tr>
              <td>Price range (USD/GBP/EUR)</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0-100</td>
              <td>0</td>
              <td>included</td>
            </tr>
          </tbody>
        </table>{" "}
        <Text as="h2" className={styles.h2} fontSize="large">
          Subscriptions
        </Text>
        <Text as="p" className={styles.p}>
          Subscriptions offer the benefit of getting a ticket at an early bird
          price every year and spreading the cost over time.
        </Text>
        <Text as="p" className={styles.p}>
          Annual pass, single ticket
        </Text>
        <ul>
          <li>
            One ticket per year for any non sold out HalfStack event of choice
          </li>
          <li>Flexible (can switch location)</li>
          <li>
            Must have at least 6 months paid before first ticket gets issued
          </li>
          <li>
            $15/month (billed monthly) or $153/year (billed up front, annually)
          </li>
          <li>Roughly the early bird price for a ticket each year</li>
        </ul>
        <Text as="p" className={styles.p}>
          Annual pass, two tickets
        </Text>
        <ul>
          <li>
            Two tickets per year for any non sold out HalfStack event of choice
          </li>
          <li>
            Flexible (can switch location, two tickets for 1 location or 1
            ticket for two locations)
          </li>
          <li>
            Must have at least 6 months paid before first tickets get issued
          </li>
          <li>
            $35/month (billed monthly) or $358/year (billed up front, annually)
          </li>
          <li>Less than the early bird price for each ticket</li>
        </ul>
        <Text as="p" className={styles.p}>
          Annual pass, one ticket for all events
        </Text>
        <ul>
          <li>One ticket for every HalfStack event</li>
          <li>
            Cannot transfer ticket to someone else given the significant
            discount
          </li>
          <li>
            Must have at least 6 months paid before first ticket get issued
          </li>
          <li>
            $50/month (billed monthly) or $512/year (billed up front, annually)
          </li>
          <li>
            Roughly the standard price for two events, you can attend as many as
            you’d like
          </li>
        </ul>
        <Text as="h2" className={styles.h2} fontSize="large">
          Living Spec Subscriptions
        </Text>
        <Text as="p" className={styles.p}>
          Living Spec is co-founded by the founder of HalfStack. If you like and
          use Living Spec and want to be an early paid user, Living Spec offers
          paid subscribers the option of one free HalfStack ticket with their
          Living SpecCer Plan ($20/month or $204/year) or two free HalfStack
          tickets per year with their Living SpecTacular Plan ($50/month or
          $504/user).
        </Text>
      </BodyArea>
      <Footer />
    </>
  );
}
