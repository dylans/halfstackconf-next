import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

export interface TintedImageProps {
  className?: string;
  fill?: boolean;
  height?: number;
  sizes?: string;
  src: string;
  width?: number;
}

export function TintedImage({
  className,
  src,
  sizes,
  width,
  height,
  fill = false,
}: TintedImageProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={className}>
      <div className={styles.overlay} />
      {errored ? null : (
        <Image
          alt=""
          className={styles.image}
          fill={fill}
          height={!fill ? height : undefined}
          onError={() => setErrored(true)}
          quality={100}
          sizes={sizes}
          src={src}
          width={!fill ? width : undefined}
        />
      )}
    </div>
  );
}
