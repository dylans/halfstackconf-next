import Image from "next/future/image";
import Head from "next/head";

import { Banner } from "../../components/Banner";
import { BannerText } from "../../components/BannerText";
import { BodyArea } from "../../components/BodyArea";
import { SponsorStacksList } from "../../components/SponsorStacksList";
import { Text } from "../../components/Text";
import { getEventData, getEvents } from "../../data";
import { ReturnedParams, ReturnedProps } from "../../utils";
import styles from "./index.module.css";

export default function Event({
  event,
  name,
  sponsors,
  year,
}: ReturnedProps<typeof getStaticProps>) {
  return (
    <>
      <Head>
        <title>{`HalfStack | ${name}`}</title>
      </Head>
      <Banner background={`${event}.png`}>
        <BannerText>
          <div className={styles.bannerImageArea}>
            <Image
              alt=""
              className={styles.bannerImage}
              fill
              src={`/outlines/london.png`}
            />
          </div>
          {name}
        </BannerText>
        <Text fontSize="large">{year}</Text>
      </Banner>

      <BodyArea className={styles.event}>hi</BodyArea>

      <SponsorStacksList {...sponsors} />
    </>
  );
}

export async function getStaticProps({
  params: { event },
}: ReturnedParams<typeof getStaticPaths>) {
  const [currentData, defaultData] = await Promise.all([
    getEventData(event, "current"),
    getEventData(event, "default"),
  ]);
  return {
    props: { ...currentData, ...defaultData, event },
  };
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: (await getEvents()).map((event) => ({
      params: { event },
    })),
  };
}
