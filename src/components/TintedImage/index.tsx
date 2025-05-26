import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

export interface TintedImageProps {
  className?: string;
  src: string;
  sizes?: string;
  width?: number;
  height?: number;
  fill?: boolean;
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
          width={!fill ? width : undefined}
          height={!fill ? height : undefined}
          onError={() => setErrored(true)}
          quality={100}
          sizes={sizes}
          src={src}
        />
      )}
    </div>
  );
}
