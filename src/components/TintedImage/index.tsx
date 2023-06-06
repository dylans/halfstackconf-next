import Image from "next/image";
import { useState } from "react";

import styles from "./index.module.css";

export interface TintedImageProps {
  className?: string;
  src: string;
}

export function TintedImage({ className, src }: TintedImageProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div className={className}>
      <div className={styles.overlay} />
      {errored ? null : (
        <Image
          alt=""
          className={styles.image}
          fill
          onError={() => setErrored(true)}
          quality={100}
          src={src}
        />
      )}
    </div>
  );
}
