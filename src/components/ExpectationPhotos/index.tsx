import clsx from "clsx";
import Image from "next/image";

import whatToExpect1 from "./assets/whatToExpect1.jpg";
import whatToExpect2 from "./assets/whatToExpect2.jpg";
import styles from "./index.module.css";

export interface ExpectationPhotosProps {
  children?: React.ReactNode;
  className?: string;
}

export function ExpectationPhotos({
  children,
  className,
}: ExpectationPhotosProps) {
  return (
    <div className={clsx(styles.expectation, className)}>
      <div className={styles.contents}>
        {children}

        <div className={styles.photos}>
          <div className={styles.photoArea}>
            <Image
              alt="Two conference speakers with dog masks on"
              className={styles.photo}
              src={whatToExpect1}
              fill
              sizes="100vw"
            />
          </div>
          <div className={styles.photoArea}>
            <Image
              alt="Three smiling conference attendees with VR headsets on"
              className={styles.photo}
              src={whatToExpect2}
              fill
              sizes="100vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
