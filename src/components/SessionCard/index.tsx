import clsx from "clsx";
import Image from "next/future/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

import { EventSession } from "~/data/types";

import { hashify } from "../../utils";
import { Anchor } from "../Anchor";
import { Card, CardDirection } from "../Card";
import { Text } from "../Text";
import { TintedImage } from "../TintedImage";
import styles from "./index.module.css";

const directionStyles = {
  "left-to-right": styles.leftToRight,
  "right-to-left": styles.rightToLeft,
};

const defaultDescription = [
  "We're not quite ready yet to announce contents here, but we know it's going to be great!",
];

export interface SessionCardProps extends EventSession {
  className?: string;
  direction?: CardDirection;
}

export function SessionCard({
  by,
  className,
  description,
  direction = "left-to-right",
  socials,
  title,
}: SessionCardProps) {
  const hash = hashify(by);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (hash === globalThis.location.hash.slice(1)) {
      setOpen(true);
    }
  }, [hash]);

  const setHashAndExpand = (event: React.SyntheticEvent) => {
    setOpen((previous) => !previous);

    void router.push("#" + hash);

    // https://github.com/facebook/react/issues/15486#issuecomment-873516817
    event.preventDefault();
  };

  return (
    <div className={styles.cardArea}>
      <div className={styles.hasher} id={hash} />
      <Card
        as="li"
        className={clsx(
          styles.sessionCard,
          directionStyles[direction],
          className
        )}
        direction={direction}
      >
        <TintedImage className={styles.image} src={`/speakers/${hash}.jpg`} />
        <div className={styles.textContents}>
          <Text
            as={Anchor}
            className={styles.by}
            fontSize="large"
            href={"#" + hash}
            variant="inline"
          >
            {by}
          </Text>
          <details className={styles.details} open={open}>
            <Text
              as="summary"
              className={styles.summary}
              onClick={setHashAndExpand}
            >
              {title}
            </Text>
            <Text as="p">
              {(description ?? defaultDescription).map((line, i) =>
                line ? (
                  <React.Fragment key={i}>{line} </React.Fragment>
                ) : (
                  <br key={i} />
                )
              )}
            </Text>
          </details>
          <div className={styles.socialLinks}>
            {socials.map(({ icon, href }) => (
              <Link
                className={styles.socialLink}
                href={href}
                key={href}
                target="_blank"
              >
                <Image
                  alt={`${by}'s ${icon}`}
                  height={32}
                  src={`/icons/${icon}.png`}
                  width={32}
                />
              </Link>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
