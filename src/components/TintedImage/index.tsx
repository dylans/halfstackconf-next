import Image from "next/image";

import styles from "./index.module.css";

export interface TintedImageProps {
  className?: string;
  src: string;
}

export function TintedImage({ className, src }: TintedImageProps) {
  return (
    <div className={className}>
      <div className={styles.overlay} />
      <Image
        alt=""
        className={styles.image}
        fill
        src={src}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
      />
    </div>
  );
}
