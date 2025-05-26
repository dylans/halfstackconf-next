import clsx from "clsx";
import Image from "next/image";
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
        <div className={styles.imageContainer}>
          <Image
            alt={`${by}`}
            className={styles.image}
            src={`/speakers/${hash}.jpg?v=8`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
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
          <div className={styles.details}>
            <Text as="h3" className={styles.title}>
              {title}
            </Text>
            <Text as="p" className={styles.description}>
              {(description ?? defaultDescription).map((line, i) =>
                line ? <span key={i}>{line} </span> : <br key={i} />
              )}
            </Text>
          </div>
        </div>
        <div className={styles.redBar}>
          {socials && (
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
                    height={20}
                    src={`/icons/${icon}.png?v=2`}
                    width={20}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
