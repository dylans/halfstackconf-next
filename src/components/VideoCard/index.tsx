import clsx from "clsx";
import Link from "next/link";
import React from "react";

import { EventVideo } from "../../data/types";
import { Card } from "../Card";
import { Text } from "../Text";
import { TintedImage } from "../TintedImage";
import { PolymorphicProps } from "../types";
import styles from "./index.module.css";

export interface VideoCardProps extends EventVideo {
  className?: string;
}

export function VideoCard<As extends React.ElementType>({
  by,
  className,
  href,
  label = "Session",
  thumbnail,
  title,
}: PolymorphicProps<As, VideoCardProps>) {
  return (
    <Card
      as={Link}
      bottom={`Watch ${label}`}
      className={clsx(className, styles.videoCard)}
      href={href}
      size="small"
      target="_blank"
    >
      <div className={styles.textContents}>
        <Text as="div" className={styles.by}>
          {by}
        </Text>
        <Text as="div" className={styles.description}>
          {title}
        </Text>
      </div>
      <TintedImage className={styles.thumbnail} src={thumbnail} />
    </Card>
  );
}
