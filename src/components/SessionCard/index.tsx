import clsx from "clsx";
import Image from "next/future/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { EventSession } from "../../data/types";
import { hashify } from "../../utils";
import { Anchor } from "../Anchor";
import { Card, CardDirection } from "../Card";
import { Text } from "../Text";
import { TintedImage } from "../TintedImage";
import styles from "./index.module.css";

export interface SessionCardProps extends EventSession {
  className?: string;
  direction?: CardDirection;
}

const directionStyles = {
  "left-to-right": styles.leftToRight,
  "right-to-left": styles.rightToLeft,
};

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

  useEffect(() => {
    if (by === globalThis.location.hash.slice(1)) {
      setOpen(true);
    }
  }, [by]);

  const setHashAndExpand = (event: React.SyntheticEvent) => {
    setOpen((previous) => !previous);
    window.history.replaceState({}, "", "#" + hash);

    // https://github.com/facebook/react/issues/15486#issuecomment-873516817
    event.preventDefault();
  };

  return (
    <Card
      as="li"
      backgroundColor={
        direction === "left-to-right" ? "--color-primary" : "--color-backdrop"
      }
      className={clsx(directionStyles[direction], className)}
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
            {description.map((line) =>
              line ? (
                <React.Fragment key={line}>{line} </React.Fragment>
              ) : (
                <br />
              )
            )}
          </Text>
        </details>
        <div className={styles.socialLinks}>
          {socials.map(({ icon, href }) => (
            <Link className={styles.socialLink} href={href} key={href}>
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
  );
}
